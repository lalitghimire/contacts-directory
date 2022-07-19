import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app';
import Contact from '../models/contactModel';

const api = supertest(app);

test('get contacts response is json', async () => {
    await api
        .get('/contacts')
        .expect(200)
        .expect('Content-Type', /application\/json/);
}, 100000);

test('post contact', async () => {
    const newContact = {
        name: 'lalit',
        email: 'lalit@lalit.com',
        phoneNo: '230560',
        address: 'Tampere',
        selectedImage: 'newimage',
    };

    await api.post('/contacts').send(newContact).expect(200);

    const contacts = await Contact.find({});
    expect(contacts[contacts.length - 1].name).toBe('lalit');
}, 100000);

afterAll(() => {
    mongoose.connection.close();
});
