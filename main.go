package main

import (
	"net/http"
	"strconv"
	"text/template"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/public", "public")

	e.GET("/hello", helloWorld)
	e.GET("/index", home)
	e.GET("/contact", contact)
	e.GET("/blog", blog)
	e.GET("/testimonials", testimonials)
	e.GET("blog-detail/:id", blogDetail)
	e.POST("/add-project", addProject)

	// e.GET("/", func(c echo.Context) error {
	// 	return c.String(http.StatusOK, "Hello world!")

	// })
	e.Logger.Fatal(e.Start("localhost:5000"))

}
func helloWorld(c echo.Context) error {
	return c.String(http.StatusOK, "hello world")

}

func home(c echo.Context) error {
	var tmp, err = template.ParseFiles("views/index.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}
	return tmp.Execute(c.Response(), nil)
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
	return tmp.Execute(c.Response(), err)
}

func blogDetail(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	data := map[string]interface{}{
		"Id":      id,
		"title":   "dumbways mobile app",
		"content": "Some quick example text to build on the card title and make up the bulk of the cards content",
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
func addProject(c echo.Context) error {
	title := c.FormValue("name")
	date1 := c.FormValue("date1")
	date2 := c.FormValue("date2")
	content := c.FormValue("textarea")
	// tech1 := c.FormValue("reactJs")
	// tech2 := c.FormValue("angularJs")
	// tech3 := c.FormValue("vueJs")
	// tech4 := c.FormValue("javascript")

	println("Title	:" + title)
	println("start date :" + date1)
	println("end date :" + date2)
	println("description:" + content)
	// println("technologi 1:" + tech1)
	// println("technologi 2:" + tech2)
	// println("technologi 3:" + tech3)
	// println("technologi 4:" + tech4)

	return c.Redirect(http.StatusMovedPermanently, "/blog")
}
