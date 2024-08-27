import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Button, Rating, Stack, TextField } from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const bgColors = [
    "red",
    "green",
    "purple",
    "black",
    "blue",
    "yellow",
    "orange",
];

const ProductCard = ({ product }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                backgroundColor: bgColors[Math.floor(Math.random() * 6)],
                borderRadius: "14px 14px 8px 8px",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                    backgroundColor: "white",
                    transform: "translateY(-6px)",
                },
            }}
        >
            <Box className="rounded-t-[30px] overflow-hidden mt-4 bg-white relative hover:rounded-none hover:mt-0 hover:pt-4 transform transition-all duration-500 ease-in-out">
                <FavoriteBorderIcon
                    className="absolute right-4 top-2 text-red-500 hidden"
                    fontSize="large"
                />
                <FavoriteIcon
                    className="absolute right-4 top-2 text-red-500"
                    fontSize="large"
                />
                <Box className="p-4">
                    <Typography
                        component="p"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "24px",
                            px: "24px",
                        }}
                        noWrap
                    >
                        {product.name}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            WebkitLineClamp: 2,
                            lineClamp: 2,
                            textAlign: "center",
                        }}
                    >
                        {product.description}
                    </Typography>
                </Box>
                <CardMedia
                    component="img"
                    style={{ height: 120, width: "100%", objectFit: "contain" }}
                    image={product.images?.[0].url}
                    alt="Paella dish"
                />
                <CardContent>
                    <Box className="flex justify-between">
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                display: "grid",
                                placeItems: "center",
                                color: "red",
                            }}
                        >
                            {`₫${product.price.toLocaleString("vi-VN")}`}
                        </Typography>
                        <Stack spacing={1}>
                            <Rating
                                name="size-small"
                                value={3}
                                readOnly
                                size="small"
                            />
                            <Typography
                                variant="body2"
                                sx={{ textAlign: "center" }}
                            >
                                Đã bán: 123
                            </Typography>
                        </Stack>
                    </Box>
                    <Stack>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", fontStyle: "italic" }}
                        >
                            Thương hiệu
                        </Typography>
                        <Typography variant="body2">Lê Quang Foods</Typography>
                    </Stack>
                </CardContent>
                <CardActions className="bg-green-500 hover:bg">
                    <Button
                        sx={{
                            textAlign: "center",
                            width: "100%",
                            fontSize: "16px",
                            color: "black",
                        }}
                        variant="text"
                        size="small"
                    >
                        Mua ngay
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default ProductCard;
