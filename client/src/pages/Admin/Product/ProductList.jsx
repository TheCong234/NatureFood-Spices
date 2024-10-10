import { Grid, Grid2 } from "@mui/material";
import Box from "@mui/material/Box";
import ProductCardPrimary from "../../../components/ProductCard/ProductCardPrimary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsAction } from "../../../hooks/Redux/Product/productAction";

const fakeProduct = {
    name: "Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB SSD)",
    category: "Computer & Accessories",
    prices: {
        salePrice: 2323,
        rootPrice: 122329,
    },
    stock: 2382,
    rating: 4,
    review: {
        reviews: {},
        total: 100,
    },
    images: [
        {
            url: "https://res.cloudinary.com/dbaygdzwf/image/upload/v1728543676/NatureFood/k6v0x95uynospfhxv7km.jpg",
            filename: "NatureFood/k6v0x95uynospfhxv7km",
        },
        {
            url: "https://res.cloudinary.com/dbaygdzwf/image/upload/v1728543675/NatureFood/g9eztwls6cp6zmqeo7az.jpg",
            filename: "NatureFood/g9eztwls6cp6zmqeo7az",
        },
    ],
};
const Index = () => {
    const dispatch = useDispatch();
    const { data: productData, loading: productLoading } = useSelector(
        (state) => state.product
    );
    const handleGetData = async () => {
        await dispatch(getProductsAction());
    };
    useEffect(() => {
        handleGetData();
    }, []);
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <ProductCardPrimary product={fakeProduct} />
                </Grid>
                <Grid item md={3}>
                    <ProductCardPrimary product={fakeProduct} />
                </Grid>
                <Grid item md={3}>
                    <ProductCardPrimary product={fakeProduct} />
                </Grid>
            </Grid>
        </Box>
    );
};
export default Index;
