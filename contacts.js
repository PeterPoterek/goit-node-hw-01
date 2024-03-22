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
    });
  } catch (err) {
    console.error("Error in listContacts:", err);
  }
};

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
