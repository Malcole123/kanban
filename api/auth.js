import { Router } from "express";
const router = Router();


import { 
    userLogIn,
    userSignUp,
} from '~/handlers/userHandler'

router.post('/register', async (req,res)=>{
    let body = req.body;
    let signUpReq = await userSignUp(body);
    res.send({
        ok:true,
    })
})


export default router;