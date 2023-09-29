const express= require('express')
var bodyParser = require('body-parser');
// var http = require('http');
// var fs = require('fs');
const app=express()
app.listen(3000,()=>{

    console.log("server running in port 3000")
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(bodyParser.json())


    app.post("/todo", async (req, res, next) => {
        const {name,todo} = req.body;
        res.send({
            name,
            todo
          });
      });

      app.get("/todo",async (req,res,next)=>{
        console.log(req.body)
        res.send("succees")
      })
     
})
// var server=http.createServer(function(req,res){
//     fs.readFile("index.html",function (error,data){
//         if(error){
//             console.log(error)
//         }else{
//             res.write(data)
//         }
//         res.end()
//     })
//   })
//   server.listen(3001)