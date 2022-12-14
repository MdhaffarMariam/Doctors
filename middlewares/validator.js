
const { check, validationResult } = require('express-validator')


exports.registrerules=()=>[
    check("fullName", 'this field is required').notEmpty(),
    check("email", 'this field is required').notEmpty(),
    check("email", 'this field should be a valid email').isEmail(),
    check("password", 'this field should have at least 6 charcters').isLength({min:6}),
    check("dateofbirth", 'this field is required').notEmpty(),
    check("adress",'this field is required').notEmpty(),
    check("phone","this field is required").isMobilePhone()
];

exports.validator=(req,res,next)=>{
const errors= validationResult(req);
errors.isEmpty()? next() : res.status(406).json({errors:errors.array()}) 
}
