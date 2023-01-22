import * as bcrypt from 'bcrypt';
import { db } from "~/api/models"

const userSignUp = ({email,password,name})=>{
    let ret_ = {
        ok:false,
        data:{}
    }
    db.user.findOne({email:body.email}).exec((err,currUser)=>{
        if(err === null){
            //Create new user 
            let hashed_pass = userPasswordEncrypt(password);
            console.log(hashed_pass);
            let newUser = new db.user({
                email,
                password:hashed_pass,
                name,
            });
            newUser.save((err_,createdUser)=>{
                if(err_ !== null){
                    ret_.ok = true;
                    ret_.data = createdUser;
                    return ret_
                }else{
                    return ret_;
                }
            })
        }else{
            return ret_;
        }
    })
}


const userLogIn = ({email,password})=>{
    db.user.findOne({email:email}).exec((err,user)=>{
        if(err=== null){
            //Verify user
            let passMatch = userPasswordDecrypt({
                hashedPassword:user.password,
                textPassword:password,
            });
            if(passMatch === true){
                return {
                    ok:true,
                    user:user,
                }
            }else{
                return {
                    ok:false
                }
            }
        }else{
            return {
                ok:false
            }
        }
    })
}

const userPasswordEncrypt = async (value)=>{
  let return_val = await bcrypt.hash(value,10,)
    return return_val;
}

const userPasswordDecrypt = async ({hashedPassword,textPassword})=>{
    let comparison = bcrypt.compare( textPassword , hashedPassword);
    return comparison;
}



export default {
    userSignUp,
    userLogIn,
}