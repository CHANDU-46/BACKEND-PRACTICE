const express= require("express");
const app= express();
const PORT=3000;

app.use(express.json());


app.use((req,res,next)=>{
    console.log("This is MiddleWare");
    next();
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{
    res.send("THIS IS ABOUT PAGE");
})

app.get('/contact',(req,res)=>{
    res.send("THIS IS CONTACT PAGE");
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send("User received");
});


app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
})