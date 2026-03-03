const http= require('http');

const  server=http.createServer((req,res)=>{
   
    if (req.url === '/' && req.method === 'GET') {
        res.write("Home Page");
        res.statusCode = 200; // Set the status code to 200 (OK)
        res.end();
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.write("About Page");
        res.statusCode = 200; // Set the status code to 200 (OK)
        res.end();
    }
    else if (req.url === '/contact' && req.method === 'GET') {
        res.write("Contact Page");
        res.statusCode = 200; // Set the status code to 200 (OK)
        res.end();
    }
    else {
        res.write("404 Not Found");
        res.statusCode = 404; // Set the status code to 404 (Not Found)
        res.end();
    }
});

server.listen(3023,()=>{
    console.log("Server is runnning on HTTP://localhost:3023");
})