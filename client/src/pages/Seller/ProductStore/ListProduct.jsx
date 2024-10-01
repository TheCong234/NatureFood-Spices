import { useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import { useSelector } from "react-redux";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Index = () => {
  const {
    data: storeData,
    loading: storeLoading,
    error: storeError,
  } = useSelector((state) => state.store);
  return (
    <Box>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {storeData?.products?.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            key={`product-card-${index}`}
          >
            <ProductCard product={product} role={"host"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
