import { Box, Button, Rating, Stack, Typography, Tab } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ProductImagesCarousel from "./ProductImagesCarousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../../../hooks/Redux/Product/productAction";
import QuantitySelector from "../../QuantitySelector";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import DetailsTab from "./DetailsTab";
import ReviewTab from "./ReviewTab";

const ProductDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productId } = useParams();
    useEffect(() => {
        dispatch(getProductByIdAction(productId));
    }, [productId]);
    const {
        product: productData,
        loading: productLoading,
        productError: productError,
    } = useSelector((state) => state.product);

    const [quantity, setQuantity] = useState(1);
    const [valueTab, setValueTab] = useState("1");

    const handleTabChange = (event, newValue) => {
        setValueTab(newValue);
    };
    return (
        <Box>
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
                        {productData?.name}
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
                        ₫{productData?.price.toLocaleString("vi-VN")}
                    </Typography>

                    <Stack
                        sx={{
                            borderTop: "1px solid",
                            borderBottom: "1px solid",
                            borderColor: "divider",
                            py: 3,
                            mt: 2,
                        }}
                        direction={"row"}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1">
                                Kiểu đóng gói
                            </Typography>
                            <Stack direction={"row"} spacing={1} sx={{ mt: 1 }}>
                                <Button
                                    size="small"
                                    sx={{ textTransform: "none" }}
                                    variant="contained"
                                    color="warning"
                                >
                                    Chai
                                </Button>
                                <Button
                                    size="small"
                                    sx={{ textTransform: "none" }}
                                    variant="contained"
                                    color="warning"
                                >
                                    Lo
                                </Button>
                                <Button
                                    size="small"
                                    sx={{ textTransform: "none" }}
                                    variant="contained"
                                    color="warning"
                                >
                                    Gói
                                </Button>
                            </Stack>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1">Trọng lượng</Typography>
                            <Typography
                                variant="h6"
                                component="h4"
                                sx={{ fontWeight: "bold", mt: 1 }}
                            >
                                500g / chai
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ py: 3 }}>
                        <Typography variant="body1" gutterBottom>
                            <strong>Bạn cần nó</strong> - hãy thêm vào giỏ hàng
                            của bạn
                        </Typography>
                        <Stack direction={"row"} spacing={2}>
                            <QuantitySelector
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                            <Button
                                variant="contained"
                                color="warning"
                                startIcon={<AddShoppingCartIcon />}
                                sx={{ textTransform: "none" }}
                            >
                                Thêm
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={valueTab}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleTabChange}
                            aria-label="lab API tabs example"
                            sx={{ width: "100%", display: "flex" }}
                        >
                            <Tab
                                label="Chi tiết sản phẩm"
                                value="1"
                                sx={{ flex: 1 }}
                            />
                            <Tab
                                label="Xếp hạng & đánh giá"
                                value="2"
                                sx={{ flex: 1 }}
                            />
                            <Tab label="Thảo luận" value="3" sx={{ flex: 1 }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <DetailsTab productData={productData} />
                    </TabPanel>
                    <TabPanel value="2">
                        <ReviewTab reviews={productData?.reviews}></ReviewTab>
                    </TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
};

export default ProductDetail;
