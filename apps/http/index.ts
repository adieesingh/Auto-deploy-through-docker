import express from "express";
import {prismaClient} from "@repo/db/client"
const app =express();

app.post("/user",async(req,res)=>{
    try {
    const {username,password}=req.body;
    prismaClient.user.create({
        data:{
            username:username,
            password:password
        }
    }).then(()=>{
        return res.status(200).json({
            message:"Data successfully inserted"
        })
    })
    

    } catch (error) {
        return res.status(500).json({
            message:"Internal Server down"
        })
    }
    
})
