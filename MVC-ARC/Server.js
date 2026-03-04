const express= require('express');
const app=express();
const PORT=3001;

const userRoutes=require('./routes/userRoute');

app.use(express.json());
app.use('/users',userRoutes);

app.listen(PORT,()=>{
    console.log("Server is running http://localhost:"+PORT);
});