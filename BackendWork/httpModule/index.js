const http=require('http');
const Port=2345; // 1024 tak sare port reserved hai
const server=http.createServer((req,res) => {

        if(req.url=='/' && req.method=='GET'){

        
            res.setHeader('Content-Type',"text/html");
            // console.log(Object.keys(req)); 
            console.log(req.url+ " "+req.method);
            res.write("<h2>Hiii</h2>");
            res.write("<p style='color:blue'>Mayank</p>")
            res.end("<div style='background:yellow'>welcome to node server</div>");
        }
        else if(req.url=='/show' && req.method=='GET'){
            res.setHeader('Content-Type',"application/json");
            res.end(JSON.stringify({
                msg:"successfully hit the api",
            }))
        }
        else if(req.url=='/show' && req.method=='POST'){
            res.setHeader('Content-Type',"application/json");
            res.end(JSON.stringify({
                msg:"successfully hit the POST @ show",
            }))
        }

});

server.listen(Port,() => {
    console.log(`server is running on port ${Port}`);
})