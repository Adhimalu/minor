const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/ProjectDB?retryWrites=true&w=majority")
const userSchema = new schema({
    userId : {type: Number},
    userName : {type: String},
    email :{type:String},
    phoneNo :{type: Number},
    password : {type: String},
    
})
var register = Mongoose.model("userRegister",userSchema);
module.exports = {register}