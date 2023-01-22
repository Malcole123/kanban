const unknownErrorHandle = (req,res,next)=>{
    res.status(403).send({
        ok:false,
        message:"Something went wrong"
    })
}   


export default {
    unknownErrorHandle,
}