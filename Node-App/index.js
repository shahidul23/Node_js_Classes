const http = require("http");
const fs = require("fs");
const port = porcess.env.PORT;
const hostname = '127.0.0.1';

const server = http.createServer((req, res)=>{
    const handleReadFile = (statusCode, fileName,req,res) =>{
        fs.readFile(fileName,"utf-8",(err,data)=>{
            if(err){
             console.log(err);
            }else{
             res.writeHead(statusCode,{'Content-Type':'text/html'});
             res.write(data);
             res.end();
            }
         });
    }
  if (req.url === "/") {
    handleReadFile(200,"./views/home.html",req,res);
  }else if(req.url === "/about"){
    handleReadFile(200,"./views/about.html",req,res);
  }else if(req.url === "/contact"){
    handleReadFile(200,"./views/contact.html",req,res);
  }else{
    handleReadFile(404,"./views/error.html",req,res);
  }
});

server.listen(port,hostname,()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});