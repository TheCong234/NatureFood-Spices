import express from 'express';
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 30,
        require: true,
        unique: true,
    }
})

const TagModel = mongoose.model('Tag', TagSchema);
export default TagModel;