require('dotenv').config()
import express from "express"

const app = express()

app.listen(
    process.env.PORT,
    () => console.log("🚀 Server is running at port", process.env.PORT)
)