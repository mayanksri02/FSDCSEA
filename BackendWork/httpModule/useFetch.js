const http=require('http');
const port=2527;
const server =http.createServer(async (req,res)=>{
    res.setHeader('Content-Type','text/html');
    const data=await fetch("https://fakestoreapi.com/products");
    const jsondata=await data.json();
    console.log(jsondata[0].category);
    const htmltemplate=`<html>
    <head><title>Bag</title>
    </head>
    <body>
    <div>
    <img src=${jsondata[10].image} height=200px width=200px />
    ${jsondata[10].category}
    </div>
    </body>
    </html>
    `
    res.end(htmltemplate);
})


server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})