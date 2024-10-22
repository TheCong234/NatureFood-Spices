import React from "react";
import {
    TextField,
    Button,
    MenuItem,
    Grid,
    Box,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import "../../../assets/styles/main.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateDeliveryYup } from "../../../validations/yup.validations";
import { useDispatch, useSelector } from "react-redux";
import useSnackNotify from "../../../components/SnackNotify";
import { createDeliveryAction } from "../../../hooks/Redux/User/userAction";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";

const states = ["California", "Texas", "New York", "Florida"];
const cities = ["Hồ Chí Minh", "Hà Nội", "Nha Trang"];
const countries = ["USA", "Canada", "Mexico"];

export default function CheckoutForm() {
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(CreateDeliveryYup),
    });

    const onSubmit = async (data) => {
        console.log(data);
        const response = await dispatch(createDeliveryAction(data));
        if (response?.error) {
            snackNotify("error")("Thêm thông tin giao hàng thất bại");
        } else {
            snackNotify("success")("Thêm thông tin giao hàng thành công");
            reset();
            navigate("/checkout");
        }
    };
    return (
        <section className="pt-5 pb-9">
            <div
                className="container-small cart"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Box width="60%" mr={3}>
                    <h2 className="mb-5 font-bold text-3xl">Thanh toán</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="mb-5 font-bold text-xl pb-5">
                            Thông tin vận chuyển
                        </h3>

                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    {...register("ownerName")}
                                    fullWidth
                                    label="Tên người nhận"
                                    variant="outlined"
                                    size="small"
                                    error={!!errors.ownerName}
                                    helperText={errors.ownerName?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    {...register("phone")}
                                    fullWidth
                                    label="Số điện thoại"
                                    type="tel"
                                    variant="outlined"
                                    size="small"
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    {...register("city")}
                                    fullWidth
                                    select
                                    label="Thành phố/Tỉnh"
                                    variant="outlined"
                                    defaultValue="Hồ Chí Minh"
                                    size="small"
                                >
                                    {cities.map((city) => (
                                        <MenuItem key={city} value={city}>
                                            {city}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    {...register("district")}
                                    fullWidth
                                    select
                                    label="Quận/Huyện"
                                    variant="outlined"
                                    defaultValue="California"
                                    size="small"
                                >
                                    {states.map((state) => (
                                        <MenuItem key={state} value={state}>
                                            {state}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    {...register("ward")}
                                    fullWidth
                                    select
                                    label="Phường/Xã"
                                    variant="outlined"
                                    defaultValue="California"
                                    size="small"
                                >
                                    {states.map((state) => (
                                        <MenuItem key={state} value={state}>
                                            {state}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    {...register("street")}
                                    fullWidth
                                    label="Địa chỉ chi tiết"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    error={!!errors.street}
                                    helperText={errors.street?.message}
                                />
                            </Grid>
                        </Grid>

                        {/* Buttons */}
                        <Box
                            mt={4}
                            display="flex"
                            justifyContent="flex-start"
                            alignItems="center"
                            size="small"
                        >
                            <LoadingButton
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{ mr: 1 }}
                                type="submit"
                                loading={loading}
                                loadingPosition="center"
                                className="na-text-transform-none"
                            >
                                Xác nhận
                            </LoadingButton>
                            <Button
                                variant="outlined"
                                color="warning"
                                size="small"
                                className="na-text-transform-none"
                            >
                                Thoát và không lưu
                            </Button>
                        </Box>
                    </form>
                </Box>

                {/* Summary Section */}
                <div className="w-[30%]">
                    <Card sx={{ marginTop: 8 }}>
                        <CardContent>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h5"
                                    component="div"
                                    fontWeight={800}
                                    fontSize={20}
                                >
                                    Bản tóm tắt
                                </Typography>
                                <Button
                                    variant="text"
                                    color="primary"
                                    style={{ textTransform: "none" }}
                                    onMouseOver={(e) => {
                                        e.target.style.textDecoration =
                                            "underline";
                                        e.target.style.color = "Blue";
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.textDecoration = "none";
                                        e.target.style.color = "";
                                    }}
                                >
                                    Chỉnh sửa giỏ hàng
                                </Button>
                            </Box>

                            <Box mt={2}>
                                {/* Product 1 */}
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    mb={2}
                                >
                                    <Box display="flex" alignItems="center">
                                        <img
                                            src="fitbit.png"
                                            // alt="Fitbit Sense"
                                            width="40"
                                            height="40"
                                            style={{ marginRight: "10px" }}
                                        />
                                        <Typography
                                            fontSize={13}
                                            className="text-truncate-2"
                                        >
                                            Fitbit Sense Advanced Smartwatch
                                        </Typography>
                                    </Box>
                                    <Typography fontSize={13} paddingRight={3}>
                                        x1
                                    </Typography>
                                    <Typography fontSize={13} paddingLeft={6}>
                                        $398
                                    </Typography>
                                </Box>

                                {/* Product 2 */}
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    mb={2}
                                >
                                    <Box display="flex" alignItems="center">
                                        <img
                                            src="/src/assets/images/logo.png"
                                            // alt="iPhone 13 Pro Max"
                                            width="40px"
                                            height="100%"
                                            style={{ marginRight: "10px" }}
                                        />
                                        <Typography fontSize={13}>
                                            iPhone 13 Pro Max-Pacific Blue-128GB
                                        </Typography>
                                    </Box>
                                    <Typography fontSize={13} paddingRight={3}>
                                        x1
                                    </Typography>
                                    <Typography fontSize={13} paddingLeft={6}>
                                        $398
                                    </Typography>
                                </Box>

                                {/* Product 3 */}
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    mb={2}
                                >
                                    <Box display="flex" alignItems="center">
                                        <img
                                            src="macbook.png"
                                            // alt="MacBook Pro"
                                            width="40"
                                            height="40"
                                            style={{ marginRight: "10px" }}
                                        />
                                        <Typography fontSize={13}>
                                            Apple MacBook Pro 13 inch-M1-8/256GB
                                        </Typography>
                                    </Box>
                                    <Typography fontSize={13} paddingRight={3}>
                                        x1
                                    </Typography>
                                    <Typography fontSize={13} paddingLeft={6}>
                                        $65
                                    </Typography>
                                </Box>
                            </Box>

                            <hr className="border-dashed border-bottom border-translucent" />

                            {/* Price Summary */}
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                mb={1}
                                mt={3}
                            >
                                <Typography fontSize={13}>
                                    Tổng số tiền:
                                </Typography>
                                <Typography fontSize={13}>$691</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                mb={1}
                            >
                                <Typography fontSize={13}>Giảm giá:</Typography>
                                <Typography color="error" fontSize={13}>
                                    -$59
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                mb={1}
                            >
                                <Typography fontSize={13}>Thuế:</Typography>
                                <Typography fontSize={13}>$126.20</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                mb={1}
                            >
                                <Typography fontSize={13}>
                                    Cổng tộng :
                                </Typography>
                                <Typography fontSize={13}>$665</Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                mb={2}
                            >
                                <Typography fontSize={13}>
                                    Phí vận chuyển:
                                </Typography>
                                <Typography fontSize={13}>$30</Typography>
                            </Box>

                            <hr className="border-dashed border-bottom border-translucent" />

                            {/* Total */}
                            <Box display="flex" justifyContent="space-between">
                                <Typography
                                    variant="h6"
                                    fontWeight={700}
                                    marginTop={2}
                                    fontSize={18}
                                >
                                    Thành tiền:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    marginTop={2}
                                    fontWeight={700}
                                    fontSize={18}
                                >
                                    $695.20
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
