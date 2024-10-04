import StoreProductModel from "../models/product.store.model";

export default StoreProductController = {
    async getStoreProducts(req, res) {
        const storeProducts = await StoreProductModel.find({});
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Lấy tất cả sản phẩm sale thành công",
                    storeProducts
                )
            );
    },
};
