import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app';
import Contact from '../models/contactModel';

const api = supertest(app);
const initialContacts = [
    {
        name: 'lalit',
        email: 'lalit@lalit.com',
        phoneNo: '230560',
        address: 'Tampere',
        selectedImage: 'newimage1',
    },
    {
        name: 'ghimire',
        email: 'ghimire@lalit.com',
        phoneNo: '123456',
        address: 'Helsinki',
        selectedImage: 'newimage2',
    },
    {
        name: 'John',
        email: 'john@lalit.com',
        phoneNo: '456789',
        address: 'Turku',
        selectedImage: 'newimage3',
    },
];

// database initialization with initial data
beforeEach(async () => {
    await Contact.deleteMany({});
    let contactObjects = initialContacts.map((contact) => new Contact(contact));
    const promiseArray = contactObjects.map((contact) => contact.save());
    await Promise.all(promiseArray);
});

describe('testing the GET request', () => {
    test('contacts are returned as json', async () => {
        await api
            .get('/contacts')
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    test('all contacts are returned', async () => {
        const res = await api.get('/contacts');
        expect(res.body).toHaveLength(3);
    });
    // unique identifier is defined id
    test('id is an identifier', async () => {
        const res = await api.get('/contacts');
        expect(res.body.map((x) => x.id)).toBeDefined();
    });

    test('fetch a single contact', async () => {
        const storedContacts = await Contact.find({});
        const firstContact = storedContacts[0].toJSON();

        const singleContact = await api.get(`/contacts/${firstContact._id}`);

        expect(singleContact.body.id).toEqual(firstContact.id);
        expect(singleContact.body.name).toEqual(firstContact.name);
        expect(singleContact.body.email).toEqual(firstContact.email);
    });
});

describe('testing the POST request', () => {
    test('a new contact is added', async () => {
        const newContact = {
            name: 'ram',
            email: 'ram@lalit.com',
            phoneNo: '1111',
            address: 'Tampere',
            selectedImage: 'newimage',
        };

        await api.post('/contacts').send(newContact).expect(200);

        const contacts = await Contact.find({});
        expect(contacts.length).toBe(initialContacts.length + 1);
    });
});

describe('testing the DELETE request', () => {
    test('a contact is sucessfully deleted ', async () => {
        const storedContacts = await Contact.find({});
        const contactToDelete = storedContacts[0];

        await api.delete(`/contacts/${contactToDelete.id}`).expect(200);

        const contactsAfterDeletion = await Contact.find({});
        expect(contactsAfterDeletion.length).toBe(storedContacts.length - 1);
    });
});

describe('testing the UPDATE request', () => {
    test('a contact is sucessfully updated', async () => {
        const storedContacts = await Contact.find({});
        const contactToEdit = storedContacts[0].toJSON();

        const editedContact = { ...contactToEdit, address: 'Tallinn' };

        await api.put(`/contacts/${contactToEdit._id}`).send(editedContact).expect(200);

        const contactAfterEdit = await Contact.findById(contactToEdit._id);

        expect(contactAfterEdit.address).toBe('Tallinn');
    });
});

afterAll(() => {
    mongoose.connection.close();
});
