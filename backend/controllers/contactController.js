const Contact = require('../models/Contact');

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

const createContact = async (req, res) => {
  const { name, email, phone } = req.body;

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
};

const updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact Deleted' });
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};