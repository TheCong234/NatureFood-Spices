import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ProductCardPrimary from "../../../components/ProductCard/ProductCardPrimary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsAction } from "../../../hooks/Redux/Product/productAction";
import { useQuery } from "../../../services/functions";

const Index = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const { data: productData, loading: productLoading } = useSelector((state) => state.product);

    useEffect(() => {
        const params = {
            skip: query.get("skip"),
            take: query.get("take"),
            type: query.get("type"),
        };
        dispatch(getProductsAction(params));
    }, [query.get("skip"), query.get("take"), query.get("type")]);
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
