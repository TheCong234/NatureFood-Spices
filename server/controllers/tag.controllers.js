import express from 'express';
import TagModel from '../models/tag.model.js';
import { statusCode } from '../config/statusCode.config.js';
import { BaseResponse } from '../config/BaseResponse.config.js';
import ProductModel from '../models/product.model.js';

const TagController = {
    async getAll(req, res){
        try {
            const tags = await TagModel.find({});
            return res.status(statusCode.OK).json(BaseResponse.success('Lấy thẻ tags thành công', tags));
        } catch (error) {
            console.log('GET ALL TAG: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Lấy thẻ tags thất bại', error));
        }
    },

    async createTags(req, res){
        try {
            const {names} = req.body;
            // return console.log(names);
            const newTags = await TagModel.insertMany(names);


            // const tag = new TagModel(req.body);
            // const newTag = await tag.save(); 
            return res.status(statusCode.OK).json(BaseResponse.success('Thêm thẻ tags thành công', newTags));
            
        } catch (error) {
            console.log('CREATE TAG: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Tạo thẻ tags thất bại', error));
        }
    },

    async addTagsToProduct(req, res){
        try {
            const {tags} = req.body;
            const {productId} = req.params;
            const product = await ProductModel.findByIdAndUpdate(productId, {$addToSet: {tags: {$each: tags}}}, {new: true});
            return res.status(statusCode.OK).json(BaseResponse.success('Thêm thẻ tags vào sp thành công', product));
        } catch (error) {
            console.log('ADD TAGs: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Thêm thẻ tags vào sp thất bại', error));
        }
    }
}

export default TagController;