const http=require("http");
const server=http.createServer((req,res)=>{
    switch(req.url){
       case "/":
           res.end("Welcome to homepage")
            break;
        case "/about us":

        res.end("Welcome to about us")
        break;
    default:
        res.writeHead(404,{"content-type":"text/html"})
        res.end("page not found") 
    }
})

server.listen(8000,()=>{
    console.log("server is running on port 8000")
})