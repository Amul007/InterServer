import { Router } from 'express';
import { addContact, deleteContact, updateContact, getContact } from '../controllers/contact.controller.js';
import contactValidation from "../middleware/contactValidate.middleware.js"
const router = Router();

router.route('/').post(contactValidation, addContact);
router.route('/:id').delete(deleteContact);
router.route('/:id').put(contactValidation, updateContact);
router.route('/').get(getContact);
export default router;
