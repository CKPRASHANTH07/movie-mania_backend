import { Playlists } from "../models/users.js";

const add_playlist=(async(username,name,movies,isPublic)=>{
    console.log(isPublic)
    const playlist=new Playlists({username:username,
        name_of_the_playlist:name,
        movies_metaData:movies,
        isPublic:isPublic==='True'})
        console.log(playlist)
    return playlist.save().then(()=>{
        return {"status":"Added new Playlist"}
    })
})

const get_playlist_username=(async(username)=>{
    const playlist=await Playlists.find({username:username})
    if (playlist===null){return {"status":"No Playlist Found"}}
    return {"playlists": playlist.map(playlist => ({
        uuid: playlist.uniqueId,
        MoviesInfo: playlist.movies_metaData,
        playlistName:playlist.name_of_the_playlist
    }))}
})

const get_playlist_uuid=async(username,uuid)=>{
    const playlist=await Playlists.findOne({uniqueId:uuid})
    if (playlist===null){return {"status":"No Playlist Found"}}
    if(playlist.isPublic===false){
        if(playlist.username===username){
    return {"uuid":playlist.uniqueId,"MoviesInfo":playlist.movies_metaData,"playlist_name":playlist.name_of_the_playlist,"isPublic":playlist.isPublic}
    }
    else{
        return {"status":"Requested Playlist is Private"}
    }
}
    else{
        return {"uuid":playlist.uniqueId,"MoviesInfo":playlist.movies_metaData,"playlist_name":playlist.name_of_the_playlist,"isPublic":playlist.isPublic}
    }
}

export {get_playlist_username,get_playlist_uuid,add_playlist}