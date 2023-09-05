// In an Express.js application, routes are used to define how the application responds to client requests. 
// They determine the behavior of your application based on the URL and HTTP method 
// (e.g., GET, POST, PUT, DELETE) used in the request. Express provides a simple and efficient way to create and manage routes.
const express= require('express');
const router= express.Router();

const {getContact,
      getContacts,
      createContact,
      updateContact,
      deleteContact}= require("../controllers/contactControllers");
// we must write the controllers in {} while requiring them

// router.route("/").get(getContacts);
// router.route("/").post(createContact);

// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

// if their are same routes then we can write the diff api in single line to reduce the code

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);




module.exports=router;