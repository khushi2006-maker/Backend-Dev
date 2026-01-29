const http=require("http");
const url=require("url");

const server=HTMLOutputElement.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url);
    console.log(parsedUrl)
    const name=parsedUrl.query;

    switch(req.url){
        case "/":
            res.end("welcome to home page")
            break;
        case "/aboutus":
            res.writeHead
    }


})