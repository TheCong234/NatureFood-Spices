import express from "express";
import mongoose from "mongoose";
//
import validator from "validator";
import uniqueValidator from "mongoose-unique-validator";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

//
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
});

const UserSchema = Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email address`,
        },
        required: true,
    },
    username: {
        type: String,
        required: [true, "UserName is required!"],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        trim: true,
        validate: {
            validator(password) {
                return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
            },
            message: "{VALUE} is not a valid password!",
        },
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
    image: ImageSchema,
    favorite: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    role: {
        type: String,
        enum: ["admin", "host", "user"],
        default: "user",
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Cart",
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
    },
    emailVerify: {
        type: Boolean,
        default: false,
    },
});

UserSchema.pre("save", function (next) {
    this.updateAt = new Date();
    next();
});

// UserSchema.pre('save',async function(next){
//     if(!this.isModified('password')) return next();
//     try {
//         this.password = await bcrypt.hash(this.password, 10);
//         next();
//     } catch (error) {
//         return next(error);
//     }
// })

//passport
UserSchema.plugin(uniqueValidator, {
    message: "{VALUE} already taken!",
});

UserSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.password = this._hashPassword(this.password);
    }
    return next();
});

UserSchema.methods = {
    _hashPassword(password) {
        return hashSync(password, 10);
    },

    authenticateUser(password) {
        return compareSync(password, this.password);
    },

    createToken() {
        return jwt.sign(
            {
                _id: this._id,
            },
            "thisisasecret"
        );
    },

    toJSON() {
        return {
            data: this._doc,
            token: this.createToken(),
        };
    },
};

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
