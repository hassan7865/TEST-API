const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({
    origin:"https://testagain-phi.vercel.app",
    credentials:true
}))
app.get("/data",(req,res)=>{
    res.cookie("accessToken",true,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        path:"/"
    })
    res.send(req.header.cookie)
})
app.listen(8888,()=>{
    console.log("Server Started!!")
})