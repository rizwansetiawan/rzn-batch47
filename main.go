package main

import (
	"b47s1/connection"
	"context"
	"fmt"
	"net/http"
	"strconv"
	"text/template"
	"time"

	"github.com/labstack/echo/v4"
)

func main() {
	connection.DatabaseConnect()

	e := echo.New()

	e.Static("/public", "public")

	e.GET("/hello", helloWorld)
	e.GET("/home", home)
	e.GET("/contact", contact)
	e.GET("/add-project", addProject)
	e.GET("/testimonials", testimonials)
	e.GET("/blog-detail/:id", blogDetail)

	e.POST("/update-project", updateProject)
	e.POST("/delete-blog/:id", deleteBlog)

	e.Logger.Fatal(e.Start("localhost:5000"))

}

type Blog struct {
	ID         int
	Title      string
	Content    string
	Image      string
	StartDate  string
	EndDate    string
	PostDate   time.Time
	Author     string
	VueJs      string
	AngularJs  string
	JavaScript string
	ReactJs    string
}

var dataBlog = []Blog{
	{

		// Title:     "Vue Js",
		// Content:   "Some quick example text to build on the card title and make up the bulk of the cards content.",
		// StartDate: "08/06/2023",
		// EndDate:   "09/06/2023",
		// Author: "Marshal",
		// VueJs:      true,
		// AngularJs:  true,
		// JavaScript: true,
		// ReactJs:    true,
	},
	{
		// Title:     "Javascript",
		// Content:   "Some quick example text to build on the card title and make up the bulk of the cards content.",
		// StartDate: "08/06/2023",
		// EndDate:    "09/06/2023",
		// Author: "Robin Sharma",
		// VueJs:      true,
		// AngularJs:  true,
		// JavaScript: false,
		// ReactJs:    true,
	},
	{
		// Title:     "Angular Js",
		// Content:   "Some quick example text to build on the card title and make up the bulk of the cards content.",
		// StartDate: "08/06/2023",
		// EndDate:    "12/12/2023",
		// Author: "Bill Gates",
		// VueJs:      true,
		// AngularJs:  false,
		// JavaScript: true,
		// ReactJs:    false,
	},
}

func helloWorld(c echo.Context) error {
	return c.String(http.StatusOK, "hello world")

}

func home(c echo.Context) error {
	data, _ := connection.Conn.Query(context.Background(), "SELECT id, title, content, image, post_date, vue, angular, javascript, react FROM tb_blog")

	var result []Blog
	for data.Next() {
		var each = Blog{}
		err := data.Scan(&each.ID, &each.Title, &each.Content, &each.Image, &each.PostDate, &each.VueJs, &each.AngularJs, &each.JavaScript, &each.ReactJs)
		if err != nil {
			fmt.Println(err.Error())
			return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
		}
		each.Author = "setiawan"
		result = append(result, each)
	}
	blogs := map[string]interface{}{
		"Blogs": result,
	}

	var tmp, err = template.ParseFiles("views/index.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmp.Execute(c.Response(), blogs)

}
func contact(c echo.Context) error {
	var tmp, err = template.ParseFiles("views/contact.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})

	}
	return tmp.Execute(c.Response(), nil)
}

func addProject(c echo.Context) error {
	var tmp, err = template.ParseFiles("views/blog.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})

	}
	return tmp.Execute(c.Response(), nil)
}

func blogDetail(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	//data := map[string]interface{}{
	// "Id":      id,
	// "title":   "dumbways mobile app",
	// "content": "Some quick example text to build on the card title and make up the bulk of the cards content",
	//	}
	var BlogDetail = Blog{}

	for i, data := range dataBlog {
		if id == i {
			BlogDetail = Blog{
				Title:      data.Title,
				StartDate:  data.StartDate,
				EndDate:    data.EndDate,
				Content:    data.Content,
				Author:     data.Author,
				VueJs:      data.VueJs,
				AngularJs:  data.AngularJs,
				JavaScript: data.JavaScript,
				ReactJs:    data.ReactJs,
			}
		}
	}
	data := map[string]interface{}{
		"Blog": BlogDetail,
	}

	var tmp, err = template.ParseFiles("views/blog-detail.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return tmp.Execute(c.Response(), data)
}

func testimonials(c echo.Context) error {
	var tmp, err = template.ParseFiles("views/testimonials.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return tmp.Execute(c.Response(), nil)
}
func updateProject(c echo.Context) error {
	title := c.FormValue("name")
	date1 := c.FormValue("date1")
	date2 := c.FormValue("date2")
	content := c.FormValue("textarea")
	// println("author	:" + title)
	// println("start date :" + date1)
	// println("end date :" + date2)
	// println("description:" + content)

	// var vue bool
	// if c.FormValue("vueJs") == "checked" {
	// 	vue = true
	// }
	// var angular bool
	// if c.FormValue("angularJs") == "checked" {
	// 	angular = true
	// }
	// var javascript bool
	// if c.FormValue("javascript") == "checked" {
	// 	javascript = true
	// }
	// var react bool
	// if c.FormValue("reactJs") == "checked" {
	// 	react = true
	// }
	var newBlog = Blog{
		Title:     title,
		StartDate: date1,
		EndDate:   date2,
		Content:   content,
		Author:    "user",
		// VueJs:      true, //belum berhasil pengkondisian checkbox user
		// AngularJs:  true,
		// JavaScript: true,
		// ReactJs:    true,
	}

	dataBlog = append(dataBlog, newBlog)
	fmt.Println(dataBlog)

	return c.Redirect(http.StatusMovedPermanently, "/home")
}
func deleteBlog(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	fmt.Println("Deleted :", id)
	dataBlog = append(dataBlog[:id], dataBlog[id+1:]...)

	return c.Redirect(http.StatusMovedPermanently, "/home")
}
