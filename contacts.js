const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    console.table(contacts);
    return data;
  } catch (err) {
    console.error("Error in listContacts:", err);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const contact = contacts.find((contact) => contact.id === contactId);
    console.log(contact);
    return contact;
  } catch (err) {
    console.error(err);
  }
};

const removeContact = async (contactId) => {
  try {
    let data = await fs.readFile(contactsPath, "utf8");
    let contacts = JSON.parse(data);
    contacts = contacts.filter((contact) => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.log("Contact removed");
  } catch (err) {
    console.error(err);
  }
};

const addContact = async (name, email, phone) => {
  try {
    let data = await fs.readFile(contactsPath, "utf8");
    let contacts = JSON.parse(data);
    const newContactId = v4().replace(/-/g, "").substring(0, 20);
    const newContact = { id: newContactId, name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.log("Contact added");
  } catch (err) {
    console.error(err);
  }
};

module.exports = { listContacts, getContactById, removeContact, addContact };
