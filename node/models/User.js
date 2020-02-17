const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const user = new userSchema({
    id: mongoose.Types.ObjectId,
    avatar: {
        fileName: String,
        mimetype: String,  
        name: String,
        size: Number,
        required: false
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    }
})
 
const model = mongoose.model('Users', user);

module.exports = model;