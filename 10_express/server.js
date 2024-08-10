const express = require('express')
const app = express()

app.use(
    express.urlencoded(
        {
            extends:true
        }
    )
);

app.get('/',(req,res)=>{
    res.send(`Hello World!<br>
        <form action="/" method="POST">
        Nome do cliente :<input type="text" name="nome">
        <button>enviar</button>
        </form>
        `);
})

app.post('/',(req, res)=>{
    res.send(req.body)
})

app.get('/contato/:idusuario',(req,res) =>{// parametro não opcional
    res.send(req.params);
})

app.get('/busca/:idusuario?/:nome?',(req,res)=>{//parâmetro opcional
    res.send(req.params)
    console.log(req.params)
})


app.listen(3000,()=>{
    console.log("Estou executando...")
})