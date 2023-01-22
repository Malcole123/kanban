import mongoose from 'mongoose'
const { Schema } = mongoose;


const UserSchema = new Schema({
    name:{
        first:String,
        last:String,
    },
    email:String,
    password:String,    
})



export default UserSchema