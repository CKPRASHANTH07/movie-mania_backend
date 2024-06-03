import jwt from 'jsonwebtoken'
import { SECRET_ACCES_TOKEN } from './config_env.js'

function generateAccessToken(user) {
    console.log(SECRET_ACCES_TOKEN)
    return jwt.sign({'username':user},SECRET_ACCES_TOKEN)
  }

export {generateAccessToken}