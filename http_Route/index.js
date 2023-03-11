const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';


const createServer = http.createServer((req,res)=>{
    const handelReadFile = (statusCode, FileLocation) =>{
        fs.readFile(FileLocation,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
       });
    }
    if (req.url === "/") {
        handelReadFile(200,"./views/index.html");
    }else if (req.url === "/about") {
        handelReadFile(200,"./views/about.html");    
    }else if (req.url === "/contact") {
        handelReadFile(200,"./views/contact.html");
    }else{
        handelReadFile(404,"./views/error.html");
    }
});
createServer.listen(port,hostname,()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});