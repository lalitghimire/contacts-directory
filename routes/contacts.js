import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.send(contacts);
    } catch (error) {
        res.send({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { name, email, phoneNo, address, selectedImage } = req.body;
    let contactEntry = new Contact({ name, email, phoneNo, address, selectedImage });

    try {
        await contactEntry.save();
        res.send(contactEntry);
    } catch (error) {
        res.send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findOne({ _id: req.params.id });

        if (!contact) {
            return res.send(`No contact with id ${req.params.id}`);
        }
        res.send(contact);
    } catch (error) {
        res.send(error.message);
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        let editedContact = await Contact.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!editedContact) {
            return res.send(`No task with id ${req.params.id}`);
        }
        res.send(editedContact);
    } catch (error) {
        res.send(error.message);
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const contactDeleted = await Contact.findByIdAndDelete(req.params.id);
        if (!contactDeleted) {
            return res.send(`No contact with id ${req.params.id}`);
        }
        res.send({ id: req.params.id });
    } catch (error) {
        res.send(error.message);
        console.log(error);
    }
});

export default router;
