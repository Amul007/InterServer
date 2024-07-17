import mongoose, { Schema } from "mongoose"
import brcypt from "bcrypt"
// firstname, lastname, email, phonenumber, gender, databirth, address, city, state, pin code, note
const contactSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    pinCode: {
        type: String,
        required: true,
    },
    subscription: {
        type: String,
        enum: ["Subscribed", "Unsubscribed"]
    },
    note: {
        type: String,
        trim: true
    }  
}, {timestamps: true})

export const contact = mongoose.model("contact", contactSchema)