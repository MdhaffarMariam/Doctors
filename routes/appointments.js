const { appointment, feedback } = require("../controllers/Appcontroller")

const express = requiree('express')
const router = express.router()

router.put('/Apointment',appointment)
router.put('/feedback' , feedback)