import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ProductImagesCarousel from "./ProductImagesCarousel";

const ProductDetail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    return (
        <Box className="flex">
            <Box className="w-1/2 pr-8">
                <ProductImagesCarousel />
            </Box>
            <Box className="w-1/2">product info</Box>
        </Box>
    );
};

export default ProductDetail;
