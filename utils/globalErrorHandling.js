export const asyncHandler = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(error=>{
            return next(new Error(error,{cause:500}))
        })
    }
}

export const globalErrorHandler = (error,req,res,next)=>{
    if(process.env.MODE == "Dev"){
        return res.status(error.cause || 500).json({
            message:error.message,
            stack:error.stack,
            error
        })
    }else{
        return res.status(error.cause || 500).json({
            message:error.message,
        })
    }
}