import express from 'express';
import { statusCode } from '../config/statusCode.config.js';
import { BaseResponse } from '../config/BaseResponse.config.js';
import UserModel from '../models/user.model.js';


const FavoriteController = {
    async getAll(req, res){
        try {
            const favoriteList = req.user.favorite;
            return res.status(statusCode.OK).json(BaseResponse.success('Lấy danh sách yêu thích thành công', favoriteList));
            
        } catch (error) {
            console.log('get all favorite: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Lấy danh sách yêu thích thất bại', error));
        }
    },

    async modifyFavorite(req, res){
        try {
            const {id} = req.params;
            let favoriteList = req.user.favorite;
            let mess = '';
            if(favoriteList.includes(id)){
                favoriteList = favoriteList.filter(f => f != id)
                mess = 'Bỏ yêu thích thành công'
            }else{
                favoriteList.push(id);
                mess = 'Thêm yêu thích thành công';
            }
            const user = await UserModel.findByIdAndUpdate(req.user._id, {favorite: favoriteList}, {new: true});
            return res.status(statusCode.OK).json(BaseResponse.success(mess, user.favorite));
        } catch (error) {
            console.log('Modify favorite: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Lấy danh sách yêu thích thất bại', error));
        }
    }
}

export default FavoriteController;