const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = () => {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading contacts file:", err);
        return;
      }
      const contacts = JSON.parse(data);
      console.table(contacts);
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

const removeContact = (contactId) => {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      let contacts = JSON.parse(data);
      contacts = contacts.filter((contact) => contact.id !== contactId);
      fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Contact removed");
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const addContact = (name, email, phone) => {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading contacts file:", err);
        return;
      }

      let contacts = JSON.parse(data);

      let id = v4();

      const newContactId = id.replace(/-/g, "").substring(0, 20);

      const newContact = { id: newContactId, name, email, phone };

      contacts.push(newContact);

      fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Contact added");
      });
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { listContacts, getContactById, removeContact, addContact };
