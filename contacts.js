const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

function listContacts() {
  // ...your code
}

function getContactById(contactId) {
  // ...your code
}

function removeContact(contactId) {
  // ...your code
}

function addContact(name, email, phone) {
  // ...your code
}

module.exports = { listContacts, getContactById, removeContact, addContact };
