import Validator from "validatorjs";

const addContactValidate = (req, res, next) => {
    const validationRule = {
        "firstname": "required|string",
        "lastname": "required|string",
        "email": "required|email",
        "phoneNumber": "required|numeric",
        "dateOfBirth": "required|date",
        "gender": "required|string",
        "address": "required|string",
        "city": "required|string",
        "state": "required|string",
        "pinCode": "required|numeric",
    };

    const validation = new Validator(req.body, validationRule);
    
    if (validation.fails()) {
        res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: validation.errors.all()
        });
    } else {
        next();
    }
};

export default addContactValidate;
