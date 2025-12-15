const CatchAsync = (fn)=> (req,res,next)=>{
  return Promise.resolve(fn(req,res,next)).catch((e)=>{
    console.log("Pinky promise");
    next(e)
  })
}

module.exports = CatchAsync
