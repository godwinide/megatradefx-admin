const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    passport:{
        type: String,
        required: true
    },
    bitcoin:{
        type: String,
        required: false
    },
    accountName:{
        type: String,
        required: false
    },
    accountNumber:{
        type: String,
        required: false
    },
    bankName:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    balance:{
        type: Number,
        required: false,
        default: 0
    },
    owing:{
        type: Number,
        required: false,
        default: 0
    },
    deposit:{
        type: Number,
        required: false,
        default: 0
    },
    last_balance:{
        type: Number,
        required: false,
        default: 0
    },
    added_bonus:{
        type: Number,
        required: false,
        default: 0
    },
    withdrawer:{
        type: Number,
        required: false,
        default: 0
    },
    total_earned:{
        type: Number,
        required: false,
        default: 0
    },
    total_deposit:{
        type: Number,
        required: false,
        default: 0
    },
    active_deposit:{
        type: Number,
        required: false,
        default: 0
    },
    pending:{
        type: Number,
        required: false,
        default: 0
    },
    pin:{
        type: Number,
        required: false,
        default: Number(String(Math.random()).slice(2,8))
    },
    total_withdraw:{
        type: Number,
        required: false,
        default: 0
    },
    account_plan:{
        type: String,
        required: false,
        default: "STARTER ($1,000 - $10,000)"
    },
    debt:{
        type: Number,
        required: false,
        default: 0
    },
    createdAt:{
        type: Date,
        required: false,
        default: Date.now
    }
});

module.exports = User = model("User", UserSchema);