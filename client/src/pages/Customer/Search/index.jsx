import { searchCustomerAction } from "../../../hooks/Redux/StoreProduct/storeProductAction";
import { useDispatch, useSelector } from "react-redux";
import useSnackNotify from "../../../components/SnackNotify";
import { formatPrice, useQuery } from "../../../services/functions";
import { useEffect } from "react";
import { Box, Button, Card, Grid, MenuItem, Pagination, Paper, Rating, Select, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination as PaginationSwipper } from "swiper/modules";
import { ChipStyled, Nodata } from "../../../components";
import { createCartItemAction } from "../../../hooks/Redux/Cart/cartAction";
import { addFavoriteStoreProductAction, deleteFavoriteStoreProductAction } from "../../../hooks/Redux/Favorite/favoriteAction";
import { useNavigate } from "react-router-dom";

const productsEachPage = 10;

export default function Search() {
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const navigate = useNavigate();
    const query = useQuery();
    const { search: searchData, loading: searchLoading } = useSelector((state) => state.storeProduct);
    const { data: favoriteData } = useSelector((state) => state.favorite);
    const { token } = useSelector((state) => state.user);
    const params = {
        keyword: query.get("keyword"),
        skip: query.get("skip"),
        take: query.get("take"),
        date: query.get("date"),
        price: query.get("price"),
        discount: query.get("discount"),
    };

    const handleAddToCart = async (storeProductId) => {
        if (!token) {
            snackNotify("error")("Bạn phải ĐĂNG NHẬP để sử dụng chức năng này");
            return;
        }
        const response = await dispatch(createCartItemAction({ storeProduct: storeProductId, quantity: 1 }));
        if (response?.error) {
            snackNotify("error")("Thêm vào giỏ thất bại");
        } else {
            snackNotify("success")("Thêm vào giỏ thành công");
        }
    };

    const handleAddFavoriteStoreProduct = async (storeProductId) => {
        if (!token) {
            snackNotify("error")("Bạn phải ĐĂNG NHẬP để sử dụng chức năng này");
            return;
        }
        const response = await dispatch(addFavoriteStoreProductAction(storeProductId));
        if (response?.error) {
            snackNotify("error")("Thêm yêu thích thất bại");
        } else {
            snackNotify("success")("Thêm yêu thích thành công");
        }
    };

    const handleRemoveFavoriteStoreProduct = async (storeProductId) => {
        if (!token) {
            snackNotify("error")("Bạn phải ĐĂNG NHẬP để sử dụng chức năng này");
            return;
        }
        const response = await dispatch(deleteFavoriteStoreProductAction(storeProductId));
        if (response?.error) {
            snackNotify("error")("Bỏ yêu thích thất bại");
        } else {
            snackNotify("success")("Bỏ yêu thích thành công");
        }
    };

    const handlePaginationChange = (event, value) => {
        navigate(
            `/search?keyword=${params.keyword}&skip=${(value - 1) * productsEachPage}&take=${productsEachPage}&date=${params.date}&price=${
                params.price
            }&discount=${params.discount}`
        );
    };

    useEffect(() => {
        (async () => {
            const response = await dispatch(searchCustomerAction(params));
            console.log(response);

            if (response?.error) {
                snackNotify("error")("Tìm sản phẩm thất bại");
            }
        })();
    }, [params.skip, params.take, params.keyword, params.date, params.price, params.discount]);
    return (
        <Box>
            <Paper className="p-4 mb-4">
                <div className="flex justify-between items-center">
                    <p>
                        Kết quả tìm kiếm: "<strong className="text-green-600">{params.keyword}</strong>"
                    </p>
                    <div className="flex space-x-2 items-center">
                        <p className=" text-gray-600">Sắp xếp theo:</p>
                        <Button
                            variant={params.date == "-1" ? "contained" : "outlined"}
                            size="small"
                            color="success"
                            onClick={() =>
                                navigate(
                                    `/search?keyword=${params.keyword}&skip=${params.skip}&take=${productsEachPage}&date=${
                                        params.date == "-1" ? 1 : -1
                                    }&price=${params.price}&discount=${params.discount}`
                                )
                            }
                        >
                            Mới nhất
                        </Button>
                        <Button
                            variant={params.discount == "1" ? "contained" : "outlined"}
                            size="small"
                            color="success"
                            onClick={() =>
                                navigate(
                                    `/search?keyword=${params.keyword}&skip=${params.skip}&take=${productsEachPage}&date=${params.date}&price=${
                                        params.price
                                    }&discount=${params.discount == "1" ? 0 : 1}`
                                )
                            }
                        >
                            Khuyến mãi
                        </Button>
                        <Select
                            variant="standard"
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={params.price}
                            size="small"
                            onChange={(e) =>
                                navigate(
                                    `/search?keyword=${params.keyword}&skip=${params.skip}&take=${productsEachPage}&date=${params.date}&price=${e.target.value}&discount=${params.discount}`
                                )
                            }
                            sx={{ minWidth: "140px" }}
                        >
                            <MenuItem value={-1}>Giá giảm dần</MenuItem>
                            <MenuItem value={1}>Giá tăng dần</MenuItem>
                        </Select>
                    </div>
                </div>
            </Paper>
            <div className="text-xl font-bold mb-3  flex">
                <div className=" border-b-2 border-green-600 pr-6">Sản phẩm</div>
            </div>
            {searchData?.product?.total != 0 ? (
                <Grid container spacing={2}>
                    {searchData?.product?.products?.map((product) => (
                        <Grid item xs={6} md={3} key={product?._id}>
                            <Card className="product_card-primary relative">
                                <Box className="cursor-pointer" onClick={() => navigate(`/product/details/${product?._id}`)}>
                                    <Swiper className="product_card-primary_swiper " pagination={true} modules={[PaginationSwipper]}>
                                        {product?.productId?.images?.map((image) => (
                                            <SwiperSlide key={image?._id} className="swiper-slide_styled">
                                                <div className="h-full flex justify-center">
                                                    <img src={image?.url} alt="product image" className="h-full" />
                                                </div>
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
                                    <Rating name="read-only" value={product?.rating || 4} readOnly />
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
            ) : (
                <Nodata content={`Không tìm thấy sản phẩm nào cho từ khóa "${params.keyword}"`} />
            )}

            <Pagination
                className="pt-6 flex justify-center"
                count={Math.floor(searchData?.product?.total / productsEachPage + 1)}
                page={Math.floor(params.skip / productsEachPage + 1) || 1}
                onChange={handlePaginationChange}
                color="success"
            />
        </Box>
    );
}
