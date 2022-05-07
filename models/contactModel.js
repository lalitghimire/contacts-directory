import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNo: String,
    address: String,
    selectedImage: String,
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
