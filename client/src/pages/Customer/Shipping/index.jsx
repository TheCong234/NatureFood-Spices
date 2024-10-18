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

const states = ["California", "Texas", "New York", "Florida"];
const cities = ["Hồ Chí Minh", "Hà Nội", "Nha Trang"];
const countries = ["USA", "Canada", "Mexico"];

export default function CheckoutForm() {
    return (
        <section className="pt-5 pb-9">
            <div
                className="container-small cart"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Box width="60%" mr={3}>
                    <h2 className="mb-5 font-bold text-3xl">Thanh toán</h2>

                    <form>
                        <h3 className="mb-5 font-bold text-xl pb-5">
                            Thông tin vận chuyển
                        </h3>

                        <Grid container spacing={5}>
                            {/* Full name */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Tên người nhận"
                                    placeholder="Nhập tên"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            {/* Email */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    placeholder="Email"
                                    type="email"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            {/* Phone */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Số điện thoại"
                                    placeholder="+1234567890"
                                    type="tel"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            {/* Address line 1 */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Địa chỉ"
                                    placeholder="Nhập địa chỉ"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            {/* Address line 2 */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Ghi chú"
                                    placeholder="ghi chú của bạn"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            {/* City */}
                            <Grid item xs={12} sm={4}>
                                <TextField
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

                            {/* State */}
                            <Grid item xs={12} sm={4}>
                                <TextField
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

                            {/* Zip code */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="Mã giảm giá"
                                    placeholder="@123"
                                    type="number"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            {/* Country */}
                            <Grid item xs={12} sm={4}>
                                {/* <TextField
                                    fullWidth
                                    select
                                    label="Country"
                                    variant="outlined"
                                    defaultValue="USA"
                                    size="small"
                                >
                                    {countries.map((country) => (
                                        <MenuItem key={country} value={country}>
                                            {country}
                                        </MenuItem>
                                    ))}
                                </TextField> */}
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
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    marginRight: "16px",
                                    backgroundColor: "#006eff",
                                    textTransform: "none",
                                }}
                                size="small"
                            >
                                Lưu
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="small"
                                style={{ textTransform: "none" }}
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
