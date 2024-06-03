import mongoose from "mongoose";
import { v4} from "uuid";
const users=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,

    },
    password:{
        type:String,
        required:true,
    },
    create_date: {
        type: Date,
        default: Date.now,
      }
})

const playlists=new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    name_of_the_playlist:{
        type:String,
        required:true,
        unique:true
    },
    movies_metaData: {
        required:true,
        type:Array
      },
    create_date: {
        type: Date,
        default: Date.now,
      },
      isPublic:{
        type:Boolean,
        required:true
      },
      uniqueId:{
        type:String,
        default:v4,
        unique:true
      }
})

const Users=mongoose.model('Users',users);
const Playlists=mongoose.model('Playlists',playlists);


export  {Users,Playlists};