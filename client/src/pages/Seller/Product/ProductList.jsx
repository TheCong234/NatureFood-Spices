import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ProductCardPrimary from "../../../components/ProductCard/ProductCardPrimary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsAction } from "../../../hooks/Redux/Product/productAction";
import { getFavoriteProductsAction } from "../../../hooks/Redux/Favorite/favoriteAction";

const Index = () => {
    const dispatch = useDispatch();
    const { data: productData, loading: productLoading } = useSelector(
        (state) => state.product
    );
    const handleGetData = async () => {
        await dispatch(getProductsAction());
        await dispatch(getFavoriteProductsAction());
    };
    useEffect(() => {
        handleGetData();
    }, []);
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
                {productData?.products?.map((product) => (
                    <Grid item md={3} key={product._id}>
                        <ProductCardPrimary product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
export default Index;
