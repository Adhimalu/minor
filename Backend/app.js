const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {register}=require("./src/model/userSchema")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use (Bodyparser.json())





app.get("/",(req,res)=>{
    res.render("register")
})

app.get("/home",(req,res)=>{
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/register",(req,res)=>{
    
    const data=req.body
    const ob=new register(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/delete/:id',function(req,res){
    const id = req.params.id;
    register.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})

  app.put('/update/:id',function(req,res){
    
    const id = req.params.id,
    userId=req.body.userId,
    userName=req.body.userName,
    email=req.body.email,
    phoneNo=req.body.phoneNo,

    register.findByIdAndUpdate({"_id":id},
    {$set:{"userId":userId,
    "userName":userName,
    "phoneNo":phoneNo,
    "email":email,
    
}}).then(function(){
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })

app.listen(3000,()=>{
    console.log("Successfully running on http://localhost:3000")
})