const fs= require('fs');

fs.writeFile('file.txt','Hello World',(err)=>{
    if(err){
        console.log(err);
    }else{
    console.log("File created sucessfully");
    fs.readFile('file.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(" CONTENT   :"+data);
        }
    });
    console.log("This is non blocking code");
    }
});