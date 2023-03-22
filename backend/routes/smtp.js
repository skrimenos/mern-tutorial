const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {

    const messageId = awaitsendMail(req)

    res.status(200).json({ message: messageId });
});

module.exports = router