import express from 'express'
import { login_user } from '../../controllers/auth.js'
import { generateAccessToken } from '../../utils/create_token.js'

const auth_login = express.Router()



auth_login.post('/login', async (req,res)=>{
    try {
        login_user(req.body.username,req.body.password).then((msg)=>{
            if (msg['status']==='Successfully logged in'){
            msg.accesstoken=generateAccessToken(req.body.username)
            res.status(200).json(msg)
            }
            else{
                res.status(401).json(msg)
            }
        }).catch((err)=>{
            console.log(err)
            res.status(404).json({"status":err.message})
        })
    }catch{
        console.log(err)
        res.status(404).json("error")
    }
})

export {auth_login}