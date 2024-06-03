import express from 'express'
import { authenticateToken } from '../../utils/authenticate_token.js'
import { add_playlist, get_playlist_username, get_playlist_uuid } from '../../controllers/playlists.js'

const read_playlists = express.Router()



read_playlists.post('/playlist/get-playlist', authenticateToken,async (req,res)=>{
    try {
    if(req.query.uuid){
        get_playlist_uuid(req.user,req.query.uuid).then((msg)=>{
            res.json(msg)
        }).catch((err)=>{
            res.status(404).json({"status":err.message})
        })
    }
    else{
    get_playlist_username(req.user).then((msg)=>{
        res.json(msg)
    }).catch((err)=>{
        console.log(err)
        // res.status(404).json({"status":err.message})
    })
}
    }catch(err){
        console.log(err)
        res.status(404).json("error")
    }
})

export {read_playlists}