const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(cors({
    origin:"https://testagain-phi.vercel.app",
    credentials:true
}))
app.post("/data",(req,res)=>{
    res.cookie("accessToken",true,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:2 * 60 * 60 * 1000,
        path:"/"
    })
    res.send(req.headers.cookie)
})
app.listen(8888,()=>{
    console.log("Server Started!!")
})