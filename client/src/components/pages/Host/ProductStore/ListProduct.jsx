import { useState } from "react";
import ProductCard from "../../../ProductCard";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Index = () => {
    const {
        data: storeData,
        loading: storeLoading,
        error: storeError,
    } = useSelector((state) => state.store);
    return (
        <Box sx={{ width: "100%" }}>
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 2, md: 3 }}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {storeData?.products?.map((product, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                        key={`product-card-${index}`}
                    >
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Index;
