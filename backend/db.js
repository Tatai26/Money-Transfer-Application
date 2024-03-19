const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Tatai26:Sajal@2603@cluster0.zhlqzq8.mongodb.net/?retryWrites=true&w=majority")
//Sajal@2603
const UserSchema=new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        minLength:3,
        maxLength: 30
    },
    firstName:{
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    LastName:{
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    password:{
        type:String,
        require: true,
        minLength: 3
    }
})
const User=mongoose.model("User", UserSchema);


const accountSchema= new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})
const Account=mongoose.model("Account", accountSchema);



module.exports={
    User, Account
};
