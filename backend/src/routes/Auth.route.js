const router = require("express").Router()

router.get("/",(req,res)=>{
  res.json({msg:"Fallo con exito 1"})
})

module.exports = router
