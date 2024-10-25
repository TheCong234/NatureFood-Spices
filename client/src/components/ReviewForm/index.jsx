import { TextField, Typography, Rating, Box, Button, Stack, CircularProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";
import { useState } from "react";
import { CreateReviewYup } from "../../validations/yup.validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { createReviewAction } from "../../hooks/Redux/Review/reviewAction";
import useSnackNotify from "../SnackNotify";

const labels = {
    1: "Useless+",
    2: "Poor+",
    3: "Ok+",
    4: "Good+",
    5: "Excellent+",
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function ReviewForm({ product }) {
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(-1);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(CreateReviewYup),
    });

    const onSubmit = async (data) => {
        data.storeProductId = product?._id;
        data.rating = rating;
        const response = await dispatch(createReviewAction(data));
        if (response?.error) {
            snackNotify("error")("Đánh giá thất bại");
        } else {
            snackNotify("success")("Đã thêm đánh giá");
            reset();
        }
    };
    return (
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack direction={"row"} spacing={2}>
                <Box
                    sx={{
                        flex: 3,
                        textAlign: "center",
                        alignContent: "center",
                    }}
                >
                    <Typography gutterBottom>Xếp hạng sao cho sản phẩm này</Typography>
                    <Box className="w-full flex items-center justify-center">
                        <Rating
                            name="hover-feedback"
                            value={rating}
                            precision={1}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {rating !== null && (
                            <Box sx={{ ml: 2, position: "relative" }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    size="small"
                                    sx={{
                                        padding: 0,
                                        textTransform: "none",
                                        px: 2,
                                        zIndex: 1,
                                        width: "96px",
                                    }}
                                >
                                    {labels[hover !== -1 ? hover : rating]}
                                </Button>
                                <SwitchRightIcon
                                    color="success"
                                    sx={{
                                        position: "absolute",
                                        left: "-10px",
                                        zIndex: 0,
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        <Button size="small" variant="contained" color="success" type="submit" sx={{ textTransform: "none", mt: 2 }}>
                            Đánh giá
                        </Button>
                    </Box>
                </Box>
                <TextField
                    {...register("body")}
                    minRows={5}
                    multiline
                    size="small"
                    variant="outlined"
                    placeholder="Đánh giá của bạn về sản phẩm này ..."
                    className="mt-1 w-full"
                    id="body"
                    error={!!errors.body}
                    helperText={errors.body?.message}
                    required
                    sx={{ flex: 7 }}
                />
            </Stack>
        </form>
    );
}
