import { Users } from "../models/users.js";
import bcrypt from 'bcrypt'
const signup_user=(async(username,password)=>{
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new Users({ username: username, password: hashedPassword })
        return user.save().then((stat)=>{
            return {"status":"Added New User"}
       }).catch((err)=>{
        if(err.code===11000){
            throw new Error("User Already Exists");
            }
            else{
                throw new Error(err.message);
            }
       })
        }catch{
            throw new Error("Error in Adding new User")
        }

})

const login_user=(async(username,password)=>{
    try {
        const users=await Users.findOne({username:username})
        if (users == null) {
            return {'status':'Cannot find user'}
          }
          if(await bcrypt.compare(password, users.password)) {
            return {'status':'Successfully logged in'}
          } else {
            return {'status':'Password is Wrong/Not Allowed'}
          }
        }catch(err){
            console.log(err)
            throw new Error("Error in Logging In")

        }

})

export {signup_user,login_user}