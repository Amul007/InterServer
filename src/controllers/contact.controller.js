import { contact } from "../models/Contact.model.js";
import { coustomError } from "../utils/coustom.error.js";

 const addContact = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            phoneNumber,
            dateOfBirth,
            gender,
            address,
            city,
            state,
            pinCode,
            subscription,
            note
        } = req.body
        console.log(firstname,
            lastname,
            email,
            phoneNumber,
            dateOfBirth,
            gender,
            address,
            city,
            state,
            pinCode,
            subscription,
            note)
        const existendContact = await contact.findOne({
            $or: [{email}, {phoneNumber}],
        })
        if(existendContact){
            res.status(409)
               .json({
                success: false,
                message: "Contact already exitsted please add new contact"
               })
        }
        const createContact = await contact.create({
            firstname,
            lastname,
            email,
            phoneNumber,
            dateOfBirth,
            gender,
            address,
            city,
            state,
            pinCode,
            subscription,
            note
        })
       res.status(201)
        .json({
            success: true,
            message: "Contact has been created",
            createContact
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const deleteContact = async(req, res) => {
    try {
        const contactId = req.params.id;
        const findedContact = await contact.findById({
            _id: contactId
        })
        if(!findedContact){
            res
             .status(409)
             .json({
                success: false,
                message: "Contact doesnot existed"
             })
        }
        const deletedContact = await contact.deleteOne({
            _id: contactId
        })
        res
         .status(201)
         .json({
            success: true,
            message: "Contact deleted succesfully"
         })
    } catch (error) {
        res.status(502).json({
            message: "error occuring while accesing database"
          })   
    }
}


const updateContact = async (req, res) => {
    try {
        const updateId = req.params.id
        console.log("this is userid", updateId)
        const {
            firstname,
            lastname,
            email,
            phoneNumber,
            dateOfBirth,
            gender,
            address,
            city,
            state,
            pinCode,
            subscription,
            note
        } = req.body
        console.log("Edit api is hit", firstname,
                    lastname,
                    email,
                    phoneNumber,
                    dateOfBirth,
                    gender,
                    address,
                    city,
                    state,
                    pinCode,
                    subscription,
                    note )
        const updatedContact = await contact.findByIdAndUpdate(updateId, {
            $set: {
                firstname,
                lastname,
                email,
                phoneNumber,
                dateOfBirth,
                gender,
                address,
                city,
                state,
                pinCode,
                subscription,
                note
            }
        })
        res
        .status(201)
        .json({
            success: true,
            message: "user upadted he he",
            updateId
        })
    } catch (error) {
        res.status(502).json({
            message: "error occuring while accesing database"
          })    
    }
}

const getContact = async(req, res) => {
    try {
        const valueInPage = 5;
        const currentPage = req.query.page || 0;
        const skipValue = valueInPage * currentPage;
        console.log("this is skip value", skipValue)
        const contacts = await contact.find()
                        .limit(valueInPage)
                        .skip(skipValue)
        res
         .status(201)
         .json({
            success: true,
            contacts
         })
    } catch (error) {
        res.status(502).json({
            message: "error occuring while accesing database"
          })
    }
}
export  { addContact, deleteContact, updateContact, getContact}
