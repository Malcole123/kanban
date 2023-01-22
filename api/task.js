import { Router } from "express";


const router = Router();
import { db } from "./models";


router.post('/create/new', async (req,res)=>{
    let new_task = new db.task({

    })
    res.send({
        ok:true,
    })
})


export default router;