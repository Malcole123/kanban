import express from 'express';

import { db } from './models';

import AuthRoute from './auth';
import TaskRoute from './task'

const app = express();

app.use('/task', TaskRoute);

let mongoURI = process.env.NUXT_ENV_MONGODB_URI || "mongodb://localhost";
let mongoOptions = {
    dbName:"kanban",
};

try{
    db.mongoose.set('strictQuery', true)
    db.mongoose.connect(mongoURI);
    console.log('connected')
}catch(err){
    console.log(err)
}

export default app;
