import { Button, FormControlLabel, Grid, MenuItem, Paper, Select, Switch, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ProductCardPrimary from "../../../components/ProductCard/ProductCardPrimary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsAction } from "../../../hooks/Redux/Product/productAction";
import { getStoreFavoriteItemsAction } from "../../../hooks/Redux/Favorite/favoriteAction";
import { useQuery } from "../../../services/functions";
import { useNavigate } from "react-router-dom";
import useSnackNotify from "../../../components/SnackNotify";

const Index = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const [sortby, setSortby] = useState(10);
    const snackNotify = useSnackNotify();

    const { data: productData, loading: productLoading } = useSelector((state) => state.product);

    const handleSortbyChange = (event) => {
        setSortby(event.target.value);
    };
    const handleGetData = async () => {
        const params = {
            skip: query.get("skip"),
            take: query.get("take"),
            type: query.get("type"),
        };
        await dispatch(getProductsAction(params));
        await dispatch(getStoreFavoriteItemsAction());
    };
    useEffect(() => {
        handleGetData();
    }, [query.get("skip"), query.get("take"), query.get("type")]);
    return (
        <Box sx={{ width: "100%" }}>
            <Paper className="mb-4 p-[20px] flex justify-between items-center">
                <Typography variant="body1">Hiển thị 1-24 trong 205 sản phẩm</Typography>
                <div className="flex items-center">
                    <div className="mr-3">
                        <span className="mr-2">Sắp xếp theo</span>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={sortby}
                            onChange={handleSortbyChange}
                            size="small"
                            sx={{ padding: "2px 8px" }}
                            inputProps={{ sx: { padding: "2px 8px" } }}
                        >
                            <MenuItem value={10}>Ngày tạo</MenuItem>
                            <MenuItem value={20}>Số sản phẩm</MenuItem>
                        </Select>
                    </div>
                </div>
            </Paper>
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
