const mongoose = require ("mongoose")
const schema = mongoose.Schema
// const slotSchema = new schema({
//     time : {
//         type: String,
//     },
//     isBooked : {
//         type: Boolean,
//         default: false
//     }
// })

// const dateSchedule = new schema({
//     date : {
//         type: String
//     },
//     slots : [slotSchema]
// })

const doctorSchema = new schema ({
fullName : String,
email: String ,
password:String,
dateofbirth:String,
adress : String,
diplome:String,
cnam : Boolean,
phone:String

})
// const Doctor = mongoose.model('Doctor', doctorSchema);
// const Slot = mongoose.model('Slot', slotSchema);
// const DateSchedule = mongoose.model('DateSchedule', dateSchedule);

// module.exports = {
//     Doctor,
//     Slot,
//     DateSchedule
// };
module.exports = mongoose.model('Doctor', doctorSchema)