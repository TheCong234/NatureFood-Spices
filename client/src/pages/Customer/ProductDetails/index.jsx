import { Box, Button, Rating, Stack, Typography, Tab, Divider, Avatar } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductImagesCarousel from "./ProductImagesCarousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuantitySelector from "../../../components/QuantitySelector";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import DetailsTab from "./DetailsTab";
import ReviewTab from "./ReviewTab";
import { getStoreProductApi } from "../../../apis/product.store";
import { formatPrice } from "../../../services/functions";
import { QuantityInput } from "../../../components";
import { createCartItemAction } from "../../../hooks/Redux/Cart/cartAction";
import useSnackNotify from "../../../components/SnackNotify";

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [valueTab, setValueTab] = useState("2");
    const snackNotify = useSnackNotify();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { storeProductId } = useParams();
    const { token } = useSelector((state) => state.user);

    const createStoreCartItem = async () => {
        if (!token) {
            snackNotify("error")("Bạn phải ĐĂNG NHẬP để sử dụng chức năng này");
            return;
        }
        const response = await dispatch(createCartItemAction({ storeProduct: product?._id, quantity }));
        if (response?.error) {
            snackNotify("error")("Thêm sản phẩm vào giỏ hàng thất bại");
        } else {
            snackNotify("success")("Đã thêm sản phẩm vào giỏ hàng");
        }
    };

    const handleGetData = async () => {
        const response = await getStoreProductApi(storeProductId);
        setProduct(response?.data);
        console.log(response);
    };
    useEffect(() => {
        handleGetData();
    }, [storeProductId]);

    const handleTabChange = (event, newValue) => {
        setValueTab(newValue);
    };
    return (
        <Box>
            <Box className="flex">
                <Box className="w-1/2 pr-8">
                    <ProductImagesCarousel product={product} />
                </Box>
                <Box className="w-1/2">
                    <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
                        {product?.productId?.name}
                    </Typography>
                    <Stack direction={"row"} sx={{ mt: 1 }}>
                        <Rating name="size-small" value={3} readOnly size="small" className="flex items-center mr-2 " />
                        <span>(3.0)</span>
                    </Stack>
                    <div>
                        <p className="text-3xl font-bold text-orange">
                            <small>₫</small>
                            {product && formatPrice(product?.productId?.salePrice)}
                        </p>
                    </div>

                    <hr className="my-4" />
                    <Stack direction={"row"}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1">Kiểu đóng gói</Typography>
                            <Stack direction={"row"} spacing={1} sx={{ mt: 1 }}>
                                <Button size="small" sx={{ textTransform: "none" }} variant="contained" color="warning">
                                    Chai
                                </Button>
                                <Button size="small" sx={{ textTransform: "none" }} variant="contained" color="warning">
                                    Lo
                                </Button>
                                <Button size="small" sx={{ textTransform: "none" }} variant="contained" color="warning">
                                    Gói
                                </Button>
                            </Stack>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1">Trọng lượng</Typography>
                            <Typography variant="h6" component="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                                500g / chai
                            </Typography>
                        </Box>
                    </Stack>

                    <hr className="my-4" />

                    <div>
                        <p>Được đăng bán bởi</p>
                        <Box component={Link} to={"/"} className="flex items-center mt-3 text-inherit hover:text-green-500">
                            <Avatar sizes="small" src="/assets/images/no-avatar.png" />
                            <p className="font-semibold text-xl ml-2">{product?.storeId?.name}</p>
                        </Box>
                    </div>
                    <hr className="my-4" />

                    <Box sx={{ py: 3 }}>
                        <Typography variant="body1" gutterBottom>
                            <strong>Bạn cần nó</strong> - hãy thêm vào giỏ hàng của bạn
                        </Typography>
                        <div className="flex">
                            <QuantityInput
                                quanity={quantity}
                                handleReduce={() => {
                                    quantity > 1 && setQuantity(quantity - 1);
                                }}
                                handleIncrease={() => {
                                    quantity < product?.stock && setQuantity(quantity + 1);
                                }}
                                className={"mr-3"}
                            />
                            <Button
                                variant="contained"
                                color="warning"
                                startIcon={<AddShoppingCartIcon />}
                                size="small"
                                className="na-text-transform-none ml-2"
                                onClick={createStoreCartItem}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={valueTab}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab label="Chi tiết sản phẩm" value="1" sx={{ flex: 1 }} />
                            <Tab label="Xếp hạng & đánh giá" value="2" sx={{ flex: 1 }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <DetailsTab product={product} />
                    </TabPanel>
                    <TabPanel value="2">
                        <ReviewTab product={product} />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
};

export default ProductDetail;
