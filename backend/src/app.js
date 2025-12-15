

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const ApiError = require("./utils/ApiError.js")
const ErrorHandling = require("./middlewares/ErrorHandler.js")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended:false}))

app.use("/api/v1", require("./routes"))

app.use((req,res)=>{
  throw new ApiError(404, "No encontramos la pagina que buscas");
  
})
app.use(ErrorHandling)
  module.exports = app
