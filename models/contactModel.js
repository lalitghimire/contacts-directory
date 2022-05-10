import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNo: String,
    address: String,
    selectedImage: String,
});

const Contact = mongoose.model('Contact', entrySchema);
export default Contact;
