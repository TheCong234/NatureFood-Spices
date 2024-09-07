import {
    TextField,
    Typography,
    Rating,
    Box,
    Button,
    Stack,
    CircularProgress,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";
import { useState } from "react";
import { CreateReviewYup } from "../../validations/yup.validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { createReviewAction } from "../../hooks/Redux/Product/productAction";
import { enqueueSnackbar } from "notistack";

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

export default function ReviewForm() {
    const dispatch = useDispatch();
    const [value, setValue] = useState(5);
    const [hover, setHover] = useState(-1);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(CreateReviewYup),
    });

    const {
        product: productData,
        loading: productLoading,
        productError: productError,
    } = useSelector((state) => state.product);

    const handleClickVariant = (variant) => (message) => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, { variant });
    };
    const onSubmitHandler = async (data) => {
        const formData = new FormData();
        formData.append("body", data.body);
        formData.append("rating", value);
        const dataToSend = { productId: productData._id, formData: formData };

        const resultDispatch = await dispatch(createReviewAction(dataToSend));
        if (createReviewAction.fulfilled.match(resultDispatch)) {
            handleClickVariant("success")("Thêm đánh giá thành công");
            reset();
        } else {
            handleClickVariant("error")(
                `Thêm đánh giá thất bại ${resultDispatch.error.message}`
            );
        }
    };
    return (
        <form
            className="mt-8"
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
        >
            <Stack direction={"row"} spacing={2}>
                <Box
                    sx={{
                        flex: 3,
                        textAlign: "center",
                        alignContent: "center",
                    }}
                >
                    <Typography gutterBottom>
                        Xếp hạng sao cho sản phẩm này
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={1}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={
                                <StarIcon
                                    style={{ opacity: 0.55 }}
                                    fontSize="inherit"
                                />
                            }
                        />
                        {value !== null && (
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
                                    {labels[hover !== -1 ? hover : value]}
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
                        {errors.rating && (
                            <Typography color="error" component="div">
                                {errors.rating.message}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        <Button
                            variant="contained"
                            color="success"
                            type="submit"
                            sx={{ textTransform: "none", mt: 2 }}
                            disabled={productLoading}
                        >
                            Đánh giá
                        </Button>
                        {productLoading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: "green",
                                    position: "absolute",
                                    top: "40%",
                                    left: "45%",
                                    zIndex: 1,
                                }}
                            />
                        )}
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
