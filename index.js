const express = require("express")
const exphbs =require("express-handlebars")

const app = express()

app.engine("handlebars" , exphbs.engine())
app.set("view engine", "handlebars")

const usuarios = [
    {
        nome: "godoyzona",
        endereco: "aquele la"
    },
    {
        nome: "davizao",
        endereco: "do lado ali ó"
    },
    {
        nome: "julianazona",
        endereco: "a casa do café"
    }
]

app.get("/",(req , res) =>{
    res.render("home", {usuarios})
})

app.get("/usuario/:id", (req , res)  => {
    let usuario = {
        nome: "maikao",
        endereco: "lalala",
        img: "https://cdn.awsli.com.br/2500x2500/2015/2015035/produto/127238225/12d64ea1df.jpg",
    };
    res.render("usuario", {
        usuario,
        id: req.params.id,
    })
})

app.get("/novo",(req , res) => {
    res.render("formCadastro")
})



app.listen(8000, () => {
    console.log("Rodando")
    console.log("http://localhost:8000/")
})