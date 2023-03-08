const fs = require('fs');
//console.log(fs);

//write file function 
// fs.writeFile('demo1.txt',"This is the symple text",function(e){
//     if(e){
//         console.log(e);
//     }else{
//         console.log("successful");
//     }
// })

//overwrite file 
fs.appendFile('demo1.txt',"My name is shahidul islam",function(e){
    if(e){
        console.log(e);
    }else{
        console.log("successful");
    }
})

//read file 
// fs.readFile('demo1.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

//file name rename
// fs.rename('demo1.txt','test.txt',function(e){
//     if(e){
//         console.log(e);
//     }else{
//         console.log("successful");
//     }
// })

//delete file
// fs.unlink('test.txt',(e)=>{
//     if(e){
//         console.log(e);
//     }else{
//         console.log("successul");
//     }
// })

//find file 
// fs.exists('demo1.txt',(result)=>{
//     if(result){
//         console.log("found");
//     }else{
//         console.log("Not found");
//     }
// })

//Sync function use
const existsFile = fs.existsSync("demo1.txt");
if(existsFile){
    console.log("demo1.txt file exists:",existsFile);
}else{
    console.log("demo1.txt file exists:",existsFile);
}