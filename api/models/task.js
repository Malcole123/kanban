import mongoose from 'mongoose'
const { Schema } = mongoose;


const TaskSchema = new Schema({
    taskTitle:String, //
    forUser:String, //
    taskDescription:String,
    subTasks:Array,
    isMainTask:Boolean,    
})



export default TaskSchema