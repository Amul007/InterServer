import mongoose, { connect } from "mongoose"

const connectDb = async () => {
    try {
       await mongoose.connect(`${process.env.DB_URL}`)
       console.log("Database is connected")
    } catch (error) {
        console.log(`Mongodb error failed ${err}`)
        process.exit(1)
    }
}

export default connectDb