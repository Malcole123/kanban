import mongoose from 'mongoose'
import TaskSchema from './task';
import UserSchema from './user';
mongoose.Promise = global.Promise;


const db = {}

db.mongoose = mongoose;
db.task = mongoose.model('Task', TaskSchema);
db.user = mongoose.model('User', UserSchema)
export { db }
