import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const SECRET_ACCES_TOKEN=process.env.SECRET_ACCES_TOKEN
const MONGODB_URI=process.env.MONGODB_URI
const HOST=process.env.HOST
const PORT=process.env.PORT
console.log(PORT)

export{SECRET_ACCES_TOKEN,MONGODB_URI,HOST,PORT}