import { SECRET_ACCES_TOKEN } from "./config_env.js";
import jwt from 'jsonwebtoken'

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        const verified = jwt.verify(token, SECRET_ACCES_TOKEN);
        req.user = verified.username;
        next();
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: 'Invalid Token' });
    }
  }

  export {authenticateToken}
  