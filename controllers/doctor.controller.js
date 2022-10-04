
const bcryptjs=require('bcryptjs')
const jwt  = require('jsonwebtoken');
const Doctor = require('../model/Doctor');



exports.registerDoctor = async(req,res)=>{
const{fullName,email,password,dateofbirth,adress,diplome,cnam,phone} = req.body;
const existantDoctor = await Doctor.findOne({email})
if (existantDoctor) return res.status(409).json({msg:'user already exists'})
try {
    const newDoctor = new Doctor({
        fullName,
        email,
        password,
        dateofbirth,
        adress,
        diplome,
        cnam,
        phone
    });
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newDoctor.password = hash
    await newDoctor.save();
    
    const payload = {
        id:newDoctor._id
    }
    let token = jwt.sign(payload, process.env.secret);
    res.send({
        token,
        doctor : {
            id:newDoctor._id,
            fullName : newDoctor.fullName,
            email:newDoctor.email,
            dateofbirth: newDoctor.dateofbirth,
            adress : newDoctor.adress,
            diplome:newDoctor.diplome,
            cnam:newDoctor.cnam,
            phone: newDoctor.phone


        }
    })
    // res.send(newDoctor);
    
    // console.log(newUser)
} catch (error) {
    res.status(500).json({msg:error.message});
}
}

exports.loginDoctor =async(req,res)=>{
    const{email,phone,password}=req.body;
    try {
        const doctor = await Doctor.findOne({email} || {phone});
        if(!doctor) return res.status(404).json({msg:'unvalid entrey'});
        const isMatch = await bcryptjs.compare(password,doctor.password);
        if(!isMatch) return res.status(404).json({msg:'unvalid entrey'});
        const payload = {
            id:doctor._id,
        };
        let token = jwt.sign(payload, process.env.secret);
        res.send({
            token,
           doctor : {
                id:doctor._id,
                fullName : doctor.fullName,
                email:doctor.email,
                phone:doctor.phone
            }
    })
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    }
    exports.authDoctor = (req,res)=>{
        res.send(req.doctor)
    }

    exports.getalldoctors = async(req,res)=>{

        try {
            const alldoctors = await Doctor.find();
            alldoctors? res.status(201).json(alldoctors)
            : res.status(401).json({msg:'all doctors error'})
        } catch (error) {
            res.status(501).json({ msg: error.message });   
        }
    }

    exports.finddoctor = async (req,res)=>{
        try {
            const oneDoctor = await Doctor.findById(req.params._id)
            oneDoctor? res.status(201).send(oneDoctor):
            res.status(501).json({msg: 'get one doctor error'})
        } catch (error) {
            res.status(501).json({msg: 'get one doctor error'})
        }
    }

    exports.getpediatre = async(req,res)=>{
        try {
            const pediatre = await Doctor.find({diplome : "pediatre"})
            pediatre? res.status(201).send(pediatre):
            res.status(501).json({msg:'error getting diplome doctor'})
        } catch (error) {
            res.status(501).json({msg:'error getting diplome doctor'})
        }
    }

    exports.getgenyco = async(req,res)=>{
        try {
            const genyco = await Doctor.find({diplome : "genyco"})
            genyco? res.status(201).send(genyco):
            res.status(501).json({msg:'error getting diplome doctor'})
        } catch (error) {
            res.status(501).json({msg:'error getting diplome doctor'})
        }
    }

    exports.getdentist = async(req,res)=>{
        try {
            const dentist = await Doctor.find({diplome : "Dentist"})
            dentist? res.status(201).send(dentist):
            res.status(501).json({msg:'error getting diplome doctor'})
        } catch (error) {
            res.status(501).json({msg:'error getting diplome doctor'})
        }
    }