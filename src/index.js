import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js"

dotenv.config({
    path: "./.env"
})

app.get("/demo", (req, res) => {
    res.send("This is check route")
})

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("Database connection failed", err)
  })