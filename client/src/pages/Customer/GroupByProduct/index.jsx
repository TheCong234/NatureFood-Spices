import { useParams } from "react-router-dom";
import { useQuery } from "../../../services/functions";
import useSnackNotify from "../../../components/SnackNotify";
import { getStoreProductsByProductApi } from "../../../apis/product.store";
import { useEffect, useState } from "react";
import { Box, Button, Card, Grid, Rating, Stack, Tooltip, Typography, Pagination } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination as PaginationSwipper } from "swiper/modules";
import { formatPrice } from "../../../services/functions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addFavoriteStoreProductAction, deleteFavoriteStoreProductAction } from "../../../hooks/Redux/Favorite/favoriteAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createCartItemAction } from "../../../hooks/Redux/Cart/cartAction";
import { ChipStyled } from "../../../components";

const productsEachPage = 10;

export default function GroupByProduct() {
    const { productId } = useParams();
    const query = useQuery();
    const snackNotify = useSnackNotify();
    const [productData, setProductData] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: favoriteData } = useSelector((state) => state.favorite);

    const handleAddToCart = async (storeProductId) => {
        const response = await dispatch(createCartItemAction({ storeProduct: storeProductId, quantity: 1 }));
        if (response?.error) {
            snackNotify("error")("Thêm vào giỏ thất bại");
        } else {
            snackNotify("success")("Thêm vào giỏ thành công");
        }
    };

    const handleAddFavoriteStoreProduct = async (storeProductId) => {
        const response = await dispatch(addFavoriteStoreProductAction(storeProductId));
        if (response?.error) {
            snackNotify("error")("Thêm yêu thích thất bại");
        } else {
            snackNotify("success")("Thêm yêu thích thành công");
        }
    };

    const handleRemoveFavoriteStoreProduct = async (storeProductId) => {
        const response = await dispatch(deleteFavoriteStoreProductAction(storeProductId));
        if (response?.error) {
            snackNotify("error")("Bỏ yêu thích thất bại");
        } else {
            snackNotify("success")("Bỏ yêu thích thành công");
        }
    };

    const handlePaginationChange = (event, value) => {
        navigate(`/product/list?skip=${(value - 1) * productsEachPage}&take=${productsEachPage}`);
    };

    const handleGetData = async () => {
        const response = await getStoreProductsByProductApi(productId);
        console.log(response);
        if (response?.success) {
            setProductData(response.data);
        } else {
            snackNotify("error")("Lỗi khi lấy danh sách sản phẩm");
        }
    };
    useEffect(() => {
        handleGetData();
    }, [productId, query.get("skip", query.get("take"))]);

    return (
        <Box>
            <Grid container spacing={2}>
                {productData?.products?.map((product) => (
                    <Grid item xs={6} md={3} key={product?._id}>
                        <Card className="product_card-primary relative" key={product?._id}>
                            <Box className="cursor-pointer" onClick={() => navigate(`/product/details/${product?._id}`)}>
                                <Swiper className="product_card-primary_swiper " pagination={true} modules={[PaginationSwipper]}>
                                    {product?.productId?.images?.map((image) => (
                                        <SwiperSlide key={image?._id} className="swiper-slide_styled">
                                            <img src={image?.url} alt="product image" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>
                            <Box className="px-5 cursor-pointer" onClick={() => navigate(`/product/details/${product?._id}`)}>
                                <p className="font-semibold text-truncate-2 text-lg leading-5">{product?.productId?.name}</p>
                                <Typography variant="body2" sx={{ color: "text.secondary", my: 1 }}>
                                    {product?.productId?.category?.name}
                                </Typography>
                                <div className="flex text-[#d26426]">
                                    <div className="text-2xl font-semibold">
                                        <small>₫</small>
                                        {formatPrice(product?.productId?.salePrice)}
                                    </div>
                                    <del className="flex items-center ml-3 font-semibold text-gray-500">
                                        <small>₫</small>
                                        {formatPrice(product?.productId?.salePrice + product?.productId?.salePrice * 0.1)}
                                    </del>
                                </div>
                                <Typography variant="body2" sx={{ color: "text.secondary", my: 1 }}>
                                    Stock: <span className="text-green-500 font-semibold">{product?.stock}</span>
                                </Typography>
                            </Box>
                            <Box className="px-4 pb-4 flex justify-between">
                                <Rating name="read-only" value={product?.rating} readOnly />
                                <Stack direction={"row"} spacing={1}>
                                    {favoriteData?.products?.some((f) => f?.storeProduct == product?._id) ? (
                                        <Tooltip title="Bỏ yêu thích" placement="top">
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    padding: "3px 12px",
                                                    minWidth: "10px",
                                                }}
                                                size="small"
                                                className="btn-product-cart"
                                                onClick={() => handleRemoveFavoriteStoreProduct(product?._id)}
                                            >
                                                <FavoriteIcon fontSize="small" color="error" />
                                            </Button>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title="Thêm vào yêu thích" placement="top">
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    padding: "3px 12px",
                                                    minWidth: "10px",
                                                }}
                                                size="small"
                                                className="btn-product-cart"
                                                onClick={() => handleAddFavoriteStoreProduct(product?._id)}
                                            >
                                                <FavoriteBorderIcon fontSize="small" />
                                            </Button>
                                        </Tooltip>
                                    )}

                                    <Tooltip title="Thêm vào giỏ hàng" placement="top">
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                padding: "3px 12px",
                                                minWidth: "10px",
                                            }}
                                            size="small"
                                            onClick={() => handleAddToCart(product?._id)}
                                        >
                                            <AddShoppingCartIcon fontSize="small" />
                                        </Button>
                                    </Tooltip>
                                </Stack>
                            </Box>
                            <div className="absolute top-3 -left-2 z-10">
                                <ChipStyled label={product?.storeId?.name} color="success" />
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                className="pt-6 flex justify-center"
                count={Math.floor(productData?.total / productsEachPage + 1)}
                page={Math.floor(query.get("skip") / productsEachPage + 1) || 1}
                onChange={handlePaginationChange}
                color="success"
            />
        </Box>
    );
}
