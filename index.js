const express = require("express"); 
const app = express(); 

app.get("/", function(req,res){
    res.send("<h1>priemira rota!</h1>");
})


app.get("/segundo", function(req,res){
    res.send("<h1>segunda rota!</h1>");
})

app.get("/terceiro", function(req,res){
    res.send("<h1>terceira rota!</h1>");
})


app.listen(process.env.PORT ?? 3000,function(erro){ 
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
