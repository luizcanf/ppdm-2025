const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
//app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/cadastro", (req, res) => {
    res.render("cadastro")
})

app.listen(PORT, () => {
     console.log("Servidor em http://localhost:"+PORT)
 })