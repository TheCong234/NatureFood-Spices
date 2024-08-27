import express from "express";
import mongoose from "mongoose";
//
import validator from "validator";
import uniqueValidator from "mongoose-unique-validator";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
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

const StoreSchema = Schema({
    name: {
        type: String,
        required: true,
        min: 2,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: ImageSchema,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
});

const StoreModel = mongoose.model("Store", StoreSchema);
export default StoreModel;