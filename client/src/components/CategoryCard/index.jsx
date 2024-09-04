import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CategoryCard = ({ category }) => {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                component="img"
                style={{ height: 200, width: "100%", objectFit: "contain" }}
                image={category.image.url}
                alt="Paella dish"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        fontWeight: "bold",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 1,
                        lineClamp: 1,
                    }}
                >
                    {category.name}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "text.secondary",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 2,
                        lineClamp: 2,
                        height: "3.2em",
                    }}
                >
                    {category.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
