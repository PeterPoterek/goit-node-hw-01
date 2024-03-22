const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = () => {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading contacts file:", err);
        return;
      }
      console.log(data);
      return data;
    });
  } catch (err) {
    console.error("Error in listContacts:", err);
  }
};

const getContactById = (contactId) => {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const contacts = JSON.parse(data);
      const contact = contacts.find((contact) => contact.id === contactId);
      console.log(contact);

      return contact;
    });
  } catch (err) {
    console.error(err);
  }
};

function removeContact(contactId) {
  // ...your code
}

function addContact(name, email, phone) {
  // ...your code
}
module.exports = { listContacts, getContactById, removeContact, addContact };
