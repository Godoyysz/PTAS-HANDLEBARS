const express = require("express")
const exphbs =require("express-handlebars")

const app = express()

app.engine("handlebars" , exphbs.engine())
app.set("view engine", "handlebars")

app.get("/",(req , res) =>{
    res.render("home")
})

app.get("/usuario/:id", (req , res)  => {
    let nome = "Tiago Pires"
    let img = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Color_Photographed_B-17E_in_Flight.jpg/800px-Color_Photographed_B-17E_in_Flight.jpg"
    res.render("usuario", {
        nome,
        id: req.params.id,
        img,

    })
})

app.get("/novo",(req , res) => {
    res.render("formCadastro")
})



app.listen(8000, () => {
    console.log("Rodando o Tiago Pipoca")
    console.log("http://localhost:8000/")
})