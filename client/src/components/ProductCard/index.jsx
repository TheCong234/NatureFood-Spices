import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Rating, Stack, TextField } from "@mui/material";
import { useState } from "react";

const bgColors = [
    "red",
    "green",
    "purple",
    "black",
    "blue",
    "yellow",
    "orange",
];

const ProductCard = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: bgColors[Math.floor(Math.random() * 6)],
                borderRadius: "14px 14px 4px 4px",
            }}
        >
            <Box className="rounded-t-[50px] overflow-hidden mt-6 bg-white">
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
                        Shrimp and Chorizo Paella Shrimp and Chorizo Paella
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
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                    </Typography>
                </Box>
                <CardMedia
                    component="img"
                    height="194"
                    image="/src/assets/images/paella.jpg"
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
                            }}
                        >
                            ₫234.389
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
                    >
                        Mua ngay
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default ProductCard;
