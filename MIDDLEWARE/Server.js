const express= require('express');
const app=express();
const PORT=3000;

app.use((req, res, next) => {
    console.log("Middleware is running");
    console.log(req.method, req.url);
    next();
});

app.get('/',(req,res)=>{
    res.send("Hello world with middleware running");       

})
app.get('/about',(req,res)=>{
    res.send("About page with middleware running"); 
});
app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
})