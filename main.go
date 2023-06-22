package main

import (
	// "b47s1/connection"
	"fmt"
	"net/http"
	"strconv"
	"text/template"

	"github.com/labstack/echo/v4"
)

func main() {
	// connection.DatabaseConnect()

	e := echo.New()

	e.Static("/public", "public")

	e.GET("/hello", helloWorld)
	e.GET("/index", home)
	e.GET("/contact", contact)
	e.GET("/blog", blog)
	e.GET("/testimonials", testimonials)
	// e.GET("blog-detail/:id", blogDetail)

	e.POST("/add-project", addProject)
	e.POST("/delete-blog/:id", deleteBlog)
	// e.POST("/new-data",newData)

	e.Logger.Fatal(e.Start("localhost:5000"))

}

type Blog struct {
	Title      string
	Content    string
	StartDate  string
	EndDate    string
	Author     string
	VueJs      bool
	AngularJs  bool
	JavaScript bool
	ReactJs    bool
}

var dataBlog = []Blog{
	{
		Title:      "Vue Js",
		Content:    "Some quick example text to build on the card title and make up the bulk of the cards content.",
		StartDate:  "08/06/2023",
		EndDate:    "09/06/2023",
		Author:     "Marshal",
		VueJs:      true,
		AngularJs:  true,
		JavaScript: true,
		ReactJs:    true,
	},
	{
		Title:      "Javascript",
		Content:    "Some quick example text to build on the card title and make up the bulk of the cards content.",
		StartDate:  "08/06/2023",
		EndDate:    "09/06/2023",
		Author:     "Robin Sharma",
		VueJs:      true,
		AngularJs:  true,
		JavaScript: false,
		ReactJs:    true,
	},
	{
		Title:      "Angular Js",
		Content:    "Some quick example text to build on the card title and make up the bulk of the cards content.",
		StartDate:  "08/06/2023",
		EndDate:    "12/12/2023",
		Author:     "Bill Gates",
		VueJs:      true,
		AngularJs:  false,
		JavaScript: true,
		ReactJs:    false,
	},
}

func helloWorld(c echo.Context) error {
	return c.String(http.StatusOK, "hello world")

}

func home(c echo.Context) error {
	var tmp, err = template.ParseFiles("views/index.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	blogs := map[string]interface{}{
		"Blogs": dataBlog,
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

func blog(c echo.Context) error {
	var tmp, err = template.ParseFiles("views/blog.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})

	}
	return tmp.Execute(c.Response(), nil)
}

// func blogDetail(c echo.Context) error {
// 	id, _ := strconv.Atoi(c.Param("id"))
// 	//data := map[string]interface{}{
// 	// "Id":      id,
// 	// "title":   "dumbways mobile app",
// 	// "content": "Some quick example text to build on the card title and make up the bulk of the cards content",
// 	//	}
// 	var BlogDetail = Blog{}

// 	for i, data := range dataBlog {
// 		if id == i {
// 			BlogDetail = Blog{
// 				Title:      data.Title,
// 				StartDate:  data.StartDate,
// 				EndDate:    data.EndDate,
// 				Content:    data.Content,
// 				Author:     data.Author,
// 				VueJs:      data.VueJs,
// 				AngularJs:  data.AngularJs,
// 				JavaScript: data.JavaScript,
// 				ReactJs:    data.ReactJs,
// 			}
// 		}
// 	}
// 	data := map[string]interface{}{
// 		"Blog": BlogDetail,
// 	}

// 	var tmp, err = template.ParseFiles("views/blog-detail.html")
// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
// 	}
// 	return tmp.Execute(c.Response(), data)
// }

func testimonials(c echo.Context) error {
	var tmp, err = template.ParseFiles("views/testimonials.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return tmp.Execute(c.Response(), nil)
}
func addProject(c echo.Context) error {
	title := c.FormValue("name")
	date1 := c.FormValue("date1")
	date2 := c.FormValue("date2")
	content := c.FormValue("textarea")
	// println("author	:" + title)
	// println("start date :" + date1)
	// println("end date :" + date2)
	// println("description:" + content)

	var vue bool
	if c.FormValue("vueJs") == "checked" {
		vue = true
	} else {
		vue = false
	}
	var angular bool
	if c.FormValue("angularJs") == "checked" {
		angular = true
	} else {
		angular = false
	}
	var javascript bool
	if c.FormValue("javascript") == "checked" {
		javascript = true
	} else {
		javascript = false
	}
	var react bool
	if c.FormValue("reactJs") == "checked" {
		react = true
	} else {
		react = false
	}
	var newBlog = Blog{
		Title:      title,
		StartDate:  date1,
		EndDate:    date2,
		Content:    content,
		Author:     "user",
		VueJs:      vue, //belum berhasil pengkondisian checkbox user
		AngularJs:  angular,
		JavaScript: javascript,
		ReactJs:    react,
	}

	dataBlog = append(dataBlog, newBlog)
	fmt.Println("vue :", vue)
	fmt.Println("angular :", angular)
	fmt.Println("javascript :", javascript)
	fmt.Println("react :", react)
	// fmt.Println(dataBlog)

	return c.Redirect(http.StatusMovedPermanently, "/index")
}
func deleteBlog(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	fmt.Println("Deleted :", id)
	dataBlog = append(dataBlog[:id], dataBlog[id+1:]...)

	return c.Redirect(http.StatusMovedPermanently, "/index")
}
