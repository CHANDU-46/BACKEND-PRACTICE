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

app.put('/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);

    const user=users.find(u=>u.id===id);
    if( !user){ 
        return res.status(404).json({message:"User not found"});
    }
    user.name=req.body.name;
    res.json(user);
})
app.delete('/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    users=users.filter(u=>u.id!==id);
    res.json({
        "message":"User deleted succesfully"
    })
})

app.listen(PORT, () => {
    console.log("REST API running on http://localhost:"+PORT);
});