

const mongoose = require ('mongoose')
const schema = mongoose.Schema

const userSchema = new schema( {
    fullName:String,
    email:String,
    password : String,
    dateofbirth:String,
    adress: String,
    phone : String

})
module.exports = mongoose.model('User',userSchema);