const express = require('express');
const app = express();
const PORT=3000;
let users=[
        {id:1,name:"chandan"},
        {id:2,name:"Teju"} 
];
app.use(express.json());

app.get("/users",(req,res)=>{
    res.json(users);
})

app.post('/users',(req,res)=>{
    const newuser={
        id:users.length+1,
        name:req.body.name
    };
    users.push(newuser);
    res.status(201).json(newuser);
})

//STILL I NEED TO DO PUT and DELETE REQUESTS

app.listen(PORT, () => {
    console.log("REST API running on http://localhost:"+PORT);
});