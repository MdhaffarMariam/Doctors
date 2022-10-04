const jwt = require("jsonwebtoken");
const Doctor = require("../model/Doctor");



const verifydoctorAuth = async (req,res,next)=>{
    let token = req.headers.authorization

    try {
    const decoded = await jwt.verify(token,process.env.secret);
    if (!decoded) return res .status(409).json({msg:'invalid token '})
    const doctor = await Doctor.findById(decoded.id).select('-password');
    if (!doctor) return res .status(409).json({msg:'unathorized '})
    else{
        req.doctor=doctor
        next()
    }} 
    catch (error) {
        res.status(500).json({msg:error.message})
    }
}
module.exports = verifydoctorAuth ;