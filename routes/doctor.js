const express= require("express")
const { registerDoctor, loginDoctor, authDoctor, getalldoctors, finddoctor, getpediatre, getgenyco, getdentist } = require("../controllers/doctor.controller")
const { doctoregistrerules, doctorvalidator } = require("../middlewares/validatorDoctor")
const verifydoctorAuth = require("../middlewares/verifydoctorAuth")
const router = express.Router()


router.post('/registerDoctor',doctoregistrerules(),doctorvalidator,registerDoctor)
router.post('/loginDoctor', loginDoctor)
router.get('/authDoctor',verifydoctorAuth,authDoctor)
router.get('/alldoctors',getalldoctors)
router.get('/finddoctor/:_id',finddoctor)
router.get('/getpediatre',getpediatre)
router.get('/getgenyco',getgenyco)
router.get('/getdentist',getdentist)

module.exports = router;





