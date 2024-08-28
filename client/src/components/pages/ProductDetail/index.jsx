import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    return (
        <Box>
            <h1>Product id : {productId}</h1>
        </Box>
    );
};

export default ProductDetail;
