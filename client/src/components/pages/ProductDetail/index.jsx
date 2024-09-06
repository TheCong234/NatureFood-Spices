import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ProductImagesCarousel from "./ProductImagesCarousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../../../hooks/Redux/Product/productAction";

const ProductDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productId } = useParams();
    useEffect(() => {
        console.log("heheh");

        dispatch(getProductByIdAction(productId));
    }, [productId]);
    const {
        product: productData,
        loading: productLoading,
        productError: productError,
    } = useSelector((state) => state.product);
    return (
        <Box className="flex">
            <Box className="w-1/2 pr-8">
                <ProductImagesCarousel />
            </Box>
            <Box className="w-1/2">
                <Typography
                    component="h2"
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                >
                    {productData.name}
                </Typography>
                <Stack direction={"row"} sx={{ mt: 1 }}>
                    <Rating
                        name="size-small"
                        value={3}
                        readOnly
                        size="small"
                        className="flex items-center mr-2 "
                    />
                    <span>(3.0)</span>
                </Stack>
                <Typography
                    component="h2"
                    variant="h4"
                    sx={{ fontWeight: "bold", mt: 2 }}
                >
                    ₫{productData.price.toLocaleString("vi-VN")}
                </Typography>

                <Stack
                    sx={{
                        borderTop: "1px solid grey",
                        borderBottom: "1px solid grey",
                        py: 3,
                        mt: 2,
                    }}
                    direction={"row"}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1">Kiểu đóng gói</Typography>
                        <Stack direction={"row"} spacing={1} sx={{ mt: 1 }}>
                            <Button variant="contained" color="warning">
                                Chai
                            </Button>
                            <Button variant="contained" color="warning">
                                Lo
                            </Button>
                            <Button variant="contained" color="warning">
                                Gói
                            </Button>
                        </Stack>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1">Kiểu đóng gói</Typography>
                        <Stack direction={"row"} spacing={1} sx={{ mt: 1 }}>
                            <Button variant="contained" color="warning">
                                Chai
                            </Button>
                            <Button variant="contained" color="warning">
                                Lo
                            </Button>
                            <Button variant="contained" color="warning">
                                Gói
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default ProductDetail;
