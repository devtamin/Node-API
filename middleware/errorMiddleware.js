const errorMiddleware = (err,req,res,next) => {
    console.log("Here is an error middleware")
    res.json({message:err.message,stack:process.env.NODE_ENV==="development"?err.stack :null})
}


module.exports = errorMiddleware