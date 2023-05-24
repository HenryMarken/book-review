const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator') //provides more validation such as the minLength and unique used in this model

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String , required: true },
    email: { type: String , required: true, unique: true },
    password: { type: String , required: true, minLength: 6 },
    books: [{ type: mongoose.Types.ObjectId, require: true, ref: 'Book' }] //the square brackets tells mongoose we will have multiple places entries instead of just one value 
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);