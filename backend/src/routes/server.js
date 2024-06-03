import mongoose from "mongoose";
import express from 'express'
import { MONGODB_URI } from "../utils/config_env.js";
import { auth_signup } from "./auth/sign_up.js";
import { auth_login } from "./auth/login.js";
import { read_playlists } from "./playlists/get_playlists.js";
import { create_playlist } from "./playlists/create_playlists.js";
import cors from 'cors'
mongoose.connect(MONGODB_URI)

const app=express()
app.use(express.json())
app.use(cors())
app.use(auth_login,
    auth_signup,
    read_playlists,
create_playlist)

export {app}