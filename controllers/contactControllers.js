//basically in controllers we write the logic of our code

const asyncHandler = require("express-async-handler"); // we don't need to write try cath block to handle the error asyncHandler will do it automatically
const Contact= require('../models/contactSchema');
//@desc Get all contacts
//@route  GET /api/contacts/
//@access public

const getContacts = asyncHandler(async (req, res) => {
 const contacts=  await Contact.find();
 res.json({ contacts });
});
//@desc Get contact
//@route  GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.json({ message: `Get contact for ${req.params.id}` });
});

//@desc Create contact
//@route  POST /api/contacts/
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The req body", req.body);

  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("All fields are mandatory"); //the error thrown will be in html if we don't use custom middleware
  }
  res.json({ message: "Create Contact" });
});

//@desc Update contact
//@route  PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: `update contact for ${req.params.id}` });
});
//@desc Delete contact
//@route  DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
