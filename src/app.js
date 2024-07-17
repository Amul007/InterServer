import express, { urlencoded } from "express"
import cors from "cors"
const app = express()

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true)
    },
    credentials: true
}))


app.use(express.json())
app.use(express.urlencoded({extended: true}))

import contactRoute from "./routes/contact.route.js"

app.use("/api/v1/contact", contactRoute)

export { app }
