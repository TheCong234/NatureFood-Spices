import ProductModel from "../models/product.model.js";
import { statusCode} from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import { cloudinary } from "../config/cloudinary.config.js";


const ProductController = {
    async getAllProduct(req, res){
        try {
            const products = await ProductModel.find({});
            return res.status(statusCode.OK).json(BaseResponse.success('Lấy tất cả sản phẩm thành công', products));
        } catch (error) {
            console.log(`get all product: ${error}`);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
    },

    async getProductById(req, res){
        try {
            const {id} = req.params;
            const product = await ProductModel.findById(id);
            if(product){
                return res.status(statusCode.OK).json(BaseResponse.success('Lấy sản phẩm thành công', product));
            }else{
                return res.status(statusCode.NOT_FOUND).json(BaseResponse.success('Không tìm thấy sản phẩm', product));
            }
        } catch (error) {
            console.log(`get all product: ${error}`);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
    },

    async getProductByCategory(req, res){
        try {
            const {idCategory} = req.params;
            const product = await ProductModel.find({category: idCategory});
            if(product){
                return res.status(statusCode.OK).json(BaseResponse.success('Lấy sản phẩm thành công', product));
            }else{
                return res.status(statusCode.NOT_FOUND).json(BaseResponse.success('Không tìm thấy sản phẩm', product));
            }
        } catch (error) {
            console.log(`get product by category: ${error}`);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
    },

    async createProduct(req, res){
        try {
            const product = new ProductModel(req.body);
            product.images = req.files.map(f => ({url: f.path, filename: f.filename}));
            await product.save();
            return res.status(statusCode.CREATED).json(BaseResponse.success('Tạo mới sản phẩm thành công', product));
        } catch (error) {
            console.log(`Create product: ${error}`);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
    },

    async updateProduct(req, res){
        try {
            const {id} = req.params;
            const product = await ProductModel.findByIdAndUpdate(id, req.body, {new: true});
            return res.status(statusCode.OK).json(BaseResponse.success('Cập nhật sản phẩm thành công', product));
            
        } catch (error) {
            console.log(`Update product: ${error}`);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
    },

    async addImagesProduct(req, res){
        try {
            const {id} = req.params;
            const product = await ProductModel.findById(id);
            const imgs = req.files.map(f => ({url: f.path, filename: f.filename}));
            product.images.push(...imgs);
            await product.save();
            return res.status(statusCode.OK).json(BaseResponse.success('Thêm ảnh vào sản phẩm thành công', product));
        } catch (error) {
            console.log(`Add images product: ${error}`);
            req.files.forEach(async(img) => await cloudinary.uploader.destroy(img.filename));
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
    },

    async deleteImageProduct(req, res){
        try {
            const {id, idImage} = req.params;
            const product = await ProductModel.findById(id);
            let filename ="";
            for(let img of product.images){
                if( img.id === idImage){
                    filename = img.filename;
                    break;
                }
            }
            console.log('filename: ', filename);
            const newProduct = await product.updateOne({$pull: {images: {filename: filename}}}, {new: true});
            await cloudinary.uploader.destroy(filename);
            return res.status(statusCode.OK).json(BaseResponse.success('Xóa ảnh sản phẩm thành công', newProduct));
        } catch (error) {
            console.log(`Delete image product: ${error}`);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
    },

    async deleteProduct(req, res){
        try {
            const {id} = req.params;
            const product = await ProductModel.findById(id);
            product.images.forEach(async(img)=> await cloudinary.uploader.destroy(img.filename));
            const deleted = await ProductModel.findByIdAndDelete(id);
            return res.status(statusCode.OK).json(BaseResponse.success('Xóa sản phẩm thành công', deleted));
        } catch (error) {
            console.log(`Delete product: ${error}`);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error(error.message, error));
        }
        
    }


}

export default ProductController;