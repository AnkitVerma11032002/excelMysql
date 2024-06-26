const express = require('express');
const userCont = require('../controller/userCont.js');

const authenticateToken = require('../authMidleware.js'); // Import the middleware

const router = express.Router();

// login 
router.post('/login', userCont.loginUser);
router.get('/getallusers', authenticateToken, userCont.getAllUsers);

// crud operations
router.get('/getusers/:id',userCont.getUserById);
router.post('/createusers', userCont.createUser);
router.put('/updateusers/:id', userCont.updateUser);
router.delete('/deleteusers/:id',userCont.deleteUser);

module.exports = router;
