## Contacts Directory

An app to store contact's information like email, phone, address, image etc. A user can create, edit or delete a contact. Also all the contacts can be viewed in a table.

## Live demo

The application is live at: https://mycontactrtk.herokuapp.com/

## Configuration and Setup

### Install

The project needs nodejs(created with v14.16) and npm installed in the system to run locally. Clone this repository and install dependencies as follow

```
git clone git@github.com:lalitghimire/contacts-directory.git
cd contacts-directory
npm install (to install server side dependencies)
cd client
npm install (to install client side dependencies )

```

### Setup

After installation is complete, create a .env file in the root of the directory and provide following variables:

```
MONGO_URI= (from MongoDB atlas to connect to database. How to from here https://www.mongodb.com/docs/atlas/getting-started/ )


```

### Run

```
npm start (to start the server at port 5000)

```

In another terminal goto the client folder and,

```
npm start (to start the client at port 3000)

```

## Testing

### Backend testing setup

Add the following to the .env file in root directory for new test database setup

```

TEST_MONGO_URI=(test database connection string )


```

### Run test

To run the test, run the command, on root of the project,  
`npm test`
