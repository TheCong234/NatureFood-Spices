import mongoose from 'mongoose';
import ReviewModel from '../models/review.model.js'
const Schema = mongoose.Schema;


const ImageSchema = new Schema({
    url:{
        type: String,
        required: true
    },
    filename:{
        type: String,
        required: true
    }
});

const ProductSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    weight: Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    inventory: Number,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    images:[ImageSchema]
})

//xóa liên quan đến sản phẩm (reviews)
ProductSchema.post('findOneAndDelete', async function(doc){
    if(doc){
        await ReviewModel.deleteMany({ _id: {$in: doc.reviews}});
    }
})

const ProductModel = mongoose.model('Product', ProductSchema);
export default ProductModel;