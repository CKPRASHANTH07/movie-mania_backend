import express from 'express'
import { signup_user } from '../../controllers/auth.js'
import { generateAccessToken } from '../../utils/create_token.js'

const auth_signup = express.Router()



auth_signup.post('/sign-up', async (req,res)=>{
    try {
        signup_user(req.body.username,req.body.password).then((msg)=>{
            msg.accesstoken=generateAccessToken(req.body.username)
            res.json(msg)
        }).catch((err)=>{
            res.status(409).json({"status":err.message})
        })
    }catch{
        res.status(404).json("error")
    }
})

export {auth_signup}