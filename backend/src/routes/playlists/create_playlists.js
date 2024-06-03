import express from 'express'
import { authenticateToken } from '../../utils/authenticate_token.js'
import { add_playlist } from '../../controllers/playlists.js'

const create_playlist = express.Router()



create_playlist.post('/playlist/add-playlist', authenticateToken,async (req,res)=>{
    try {
        add_playlist(req.body.username,req.body.playlist_name,req.body.movies,req.body.isPublic).then((msg)=>{
            res.json(msg)
        }).catch((err)=>{
            res.status(404).json({"status":err.message})
        })
    }catch{
        res.status(404).json("error")
    }
})

export {create_playlist}