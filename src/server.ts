require('dotenv').config()
import "./shared/typeorm/database/connection";
import "express-async-errors"
import express from "express";
import routes from "./routes";

const app = express()

app.use(express.json())
app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof Error)
    return response.status(400).json({ Error: error.name, Message: error.message })

  return response.status(500).json({ Error: error.name, Message: error.message })
});

app.listen(
  process.env.PORT,
  () => console.log(`🚀 Server is running at port ${process.env.PORT}`)
)
