import React, { useState } from "react";
import {
    TextField,
    Button,
    MenuItem,
    Grid,
    Box,
    Card,
    CardContent,
    Typography,
    RadioGroup,
    FormControl,
    FormLabel,
    InputLabel,
    Select,
    Checkbox,
    FormControlLabel,
    Radio,
} from "@mui/material";
import "../../../assets/styles/main.css";

import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { color, textTransform } from "@mui/system";
import { Link } from "react-router-dom";
export default function CheckoutForm() {
    // State management
    const [shippingDetails, setShippingDetails] = useState({
        name: "Shatinon Mekalan",
        address: "Apt: 6/B, 192 Edsel Road, Van Nuys, California, USA 96580",
        phone: "818-414-4092",
    });
    const [selectedDelivery, setSelectedDelivery] = useState("oneDay");

    const handleChange = (event) => {
        setSelectedDelivery(event.target.value);
    };

    const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

    const handleEdit = () => {
        console.log("Edit button clicked");
    };
    const [paymentMethod, setPaymentMethod] = useState("Paypal");
    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const states = [
        "VietinBank",
        "VietcomBank",
        "Agribank",
        "Anh bank cho iem",
    ];
    const cities = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];
    const countries = ["2012", "2013", "2014"];

    return (
        <section className="pt-5 pb-9">
            <div
                className="container-small cart"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Box width="60%" mr={3}>
                    <h2 className=" font-bold text-3xl">Thanh toán</h2>

                    <form>
                        <div
                            style={{
                                padding: "20px",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            <h3 className=" font-bold text-xl">
                                Chi tiết vận chuyển
                            </h3>
                            <Button
                                className="na-text-transform-none hover:text-green-600"
                                component={Link}
                                to="/shipping"
                            >
                                Chỉnh sửa
                            </Button>
                            <div>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <PersonIcon sx={{ mr: 1 }} />
                                    <Typography>
                                        <strong>Tên:</strong>{" "}
                                        {shippingDetails.name}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <LocationOnIcon sx={{ mr: 1 }} />
                                    <Typography>
                                        <strong>Địa chỉ:</strong>{" "}
                                        {shippingDetails.address}
                                    </Typography>
                                </Box>

                                {/* Số điện thoại */}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    className="pb-5"
                                >
                                    <PhoneIcon sx={{ mr: 1 }} />
                                    <Typography>
                                        <strong>Số điện thoại:</strong>{" "}
                                        {shippingDetails.phone}
                                    </Typography>
                                </Box>
                            </div>
                            <hr />
                            <div>
                                <h3 className="font-bold text-xl pt-5">
                                    Chi tiết thanh toán
                                </h3>
                                <Box className="pb-4">
                                    <input
                                        type="checkbox"
                                        checked={billingSameAsShipping}
                                        onChange={() =>
                                            setBillingSameAsShipping(
                                                !billingSameAsShipping
                                            )
                                        }
                                    />
                                    Xác nhận địa chỉ giao hàng
                                </Box>

                                {billingSameAsShipping ? (
                                    <div>
                                        {/* Tên */}
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            mb={2}
                                        >
                                            <PersonIcon sx={{ mr: 1 }} />
                                            <Typography>
                                                <strong>Tên:</strong>{" "}
                                                {shippingDetails.name}
                                            </Typography>
                                        </Box>

                                        {/* Địa chỉ */}
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            mb={2}
                                        >
                                            <LocationOnIcon sx={{ mr: 1 }} />
                                            <Typography>
                                                <strong>Địa chỉ:</strong>{" "}
                                                {shippingDetails.address}
                                            </Typography>
                                        </Box>

                                        {/* Số điện thoại */}
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            className="pb-5"
                                        >
                                            <PhoneIcon sx={{ mr: 1 }} />
                                            <Typography>
                                                <strong>Số điện thoại:</strong>{" "}
                                                {shippingDetails.phone}
                                            </Typography>
                                        </Box>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Chưa có gì</p>
                                    </div>
                                )}
                                <hr />
                            </div>
                            <Box mt={4}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    fontWeight={700}
                                >
                                    Cách thức giao hàng
                                </Typography>

                                <RadioGroup
                                    aria-label="delivery-type"
                                    name="delivery-type"
                                    value={selectedDelivery}
                                    onChange={handleChange}
                                    row
                                >
                                    {/* Free Shipping */}
                                    <Grid container spacing={2} mt={2}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControlLabel
                                                value="free"
                                                control={<Radio />}
                                                label={
                                                    <Box
                                                        display="flex"
                                                        flexDirection="column"
                                                    >
                                                        <Typography
                                                            fontWeight={700}
                                                        >
                                                            Miễn phí giao hàng
                                                            <Typography
                                                                component="span"
                                                                color="green"
                                                                fontWeight={400}
                                                            >
                                                                $0.00
                                                            </Typography>
                                                        </Typography>
                                                        <Typography color="gray">
                                                            Thời gian dự kiến:
                                                            Jun 21 – Jul 20
                                                        </Typography>
                                                        <Typography color="blue">
                                                            Nhận đơn hàng đúng
                                                            thời gian !
                                                        </Typography>
                                                    </Box>
                                                }
                                            />
                                        </Grid>

                                        {/* Two Days Shipping */}
                                        <Grid item xs={12} sm={6}>
                                            <FormControlLabel
                                                value="twoDays"
                                                control={<Radio />}
                                                label={
                                                    <Box
                                                        display="flex"
                                                        flexDirection="column"
                                                    >
                                                        <Typography
                                                            fontWeight={700}
                                                        >
                                                            Giao hành nhanh
                                                            <Typography
                                                                component="span"
                                                                fontWeight={400}
                                                            >
                                                                $20.00
                                                            </Typography>
                                                        </Typography>
                                                        <Typography color="gray">
                                                            Thời gian dự kiến:
                                                            Jun 21 – Jul 20
                                                        </Typography>
                                                        <Typography color="blue">
                                                            Bạn sẽ nhận được
                                                            hành nhanh hơn với
                                                            vận chuyển này !
                                                        </Typography>
                                                    </Box>
                                                }
                                            />
                                        </Grid>

                                        {/* Standard Shipping */}
                                        <Grid item xs={12} sm={6}>
                                            <FormControlLabel
                                                value="standard"
                                                control={<Radio />}
                                                label={
                                                    <Box
                                                        display="flex"
                                                        flexDirection="column"
                                                    >
                                                        <Typography
                                                            fontWeight={700}
                                                        >
                                                            Vận chuyển tiêu
                                                            chuẩn
                                                            <Typography
                                                                component="span"
                                                                fontWeight={400}
                                                            >
                                                                $10.00
                                                            </Typography>
                                                        </Typography>
                                                        <Typography color="gray">
                                                            Thời gian dự kiến:
                                                            Jun 21 – Jul 20
                                                        </Typography>
                                                        <Typography color="blue">
                                                            Nhận hàng đúng hẹn
                                                            và tiết kiệm !
                                                        </Typography>
                                                    </Box>
                                                }
                                            />
                                        </Grid>

                                        {/* One Day Shipping */}
                                        <Grid item xs={12} sm={6}>
                                            <FormControlLabel
                                                value="oneDay"
                                                control={<Radio />}
                                                label={
                                                    <Box
                                                        display="flex"
                                                        flexDirection="column"
                                                    >
                                                        <Typography
                                                            fontWeight={700}
                                                        >
                                                            Giao hàng trong ngày
                                                            <Typography
                                                                component="span"
                                                                fontWeight={400}
                                                            >
                                                                $30.00
                                                            </Typography>
                                                            <Typography
                                                                component="span"
                                                                sx={{
                                                                    backgroundColor:
                                                                        "#ffcc00",
                                                                    padding:
                                                                        "2px 5px",
                                                                    borderRadius:
                                                                        "5px",
                                                                    fontSize:
                                                                        "12px",
                                                                    marginLeft:
                                                                        "10px",
                                                                }}
                                                            >
                                                                Nên sử dụng
                                                            </Typography>
                                                        </Typography>
                                                        <Typography color="gray">
                                                            Thời gian dự kiến: 1
                                                            ngày
                                                        </Typography>
                                                        <Typography
                                                            color="blue"
                                                            className="pb-5"
                                                        >
                                                            Đơn hàng của bạn sẽ
                                                            được ưu tiên vận
                                                            chuyển và nhận trong
                                                            ngày
                                                        </Typography>
                                                    </Box>
                                                }
                                            />
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </Box>
                            <hr />
                            <Box className="pt-6">
                                <FormControl fullWidth>
                                    <h3 className="font-bold text-xl pb-6 ">
                                        Phương thức thanh toán
                                    </h3>
                                    <RadioGroup
                                        row
                                        aria-label="payment-method"
                                        name="payment-method"
                                        value={paymentMethod}
                                        onChange={handlePaymentChange}
                                    >
                                        <FormControlLabel
                                            value="Credit card"
                                            control={<Radio />}
                                            label={
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    Thẻ ngân hàng
                                                    <img
                                                        src="src/assets/images/visa4.png"
                                                        alt="credit cards"
                                                        style={{
                                                            width: "35px",
                                                            marginLeft: "5px",
                                                            borderRadius: "3px",
                                                        }}
                                                    />
                                                    <img
                                                        src="src/assets/images/visa3.png"
                                                        alt="credit cards"
                                                        style={{
                                                            width: "35px",
                                                            marginLeft: "5px",
                                                            borderRadius: "3px",
                                                        }}
                                                    />
                                                    <img
                                                        src="src/assets/images/visa2.jpg"
                                                        alt="credit cards"
                                                        style={{
                                                            width: "35px",
                                                            marginLeft: "5px",
                                                            borderRadius: "3px",
                                                        }}
                                                    />
                                                </div>
                                            }
                                        />
                                        <FormControlLabel
                                            value="Paypal"
                                            control={<Radio />}
                                            label="Tiền mặt"
                                        />
                                        <FormControlLabel
                                            value="Coupon"
                                            control={<Radio />}
                                            label="Phiếu giảm giá"
                                        />
                                    </RadioGroup>
                                </FormControl>

                                {paymentMethod === "Credit card" && (
                                    <Grid container spacing={3} mt={2}>
                                        {/* Select card */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                select
                                                label="Loại thẻ ngân hàng"
                                                variant="outlined"
                                                defaultValue="bank"
                                                size="small"
                                            >
                                                {states.map((city) => (
                                                    <MenuItem
                                                        key={city}
                                                        value={city}
                                                    >
                                                        {city}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>

                                        {/* Card number */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Nhập số ngân hàng"
                                                placeholder="Enter card number"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Full name */}
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Tên người dùng"
                                                placeholder="Enter full name"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Expiry date */}
                                        <Grid item xs={6} sm={3}>
                                            <TextField
                                                fullWidth
                                                select
                                                label="Tháng"
                                                variant="outlined"
                                                defaultValue="bank"
                                                size="small"
                                            >
                                                {cities.map((city) => (
                                                    <MenuItem
                                                        key={city}
                                                        value={city}
                                                    >
                                                        {city}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>

                                        <Grid item xs={6} sm={3}>
                                            <TextField
                                                fullWidth
                                                select
                                                label="Loại thẻ ngân hàng"
                                                variant="outlined"
                                                defaultValue="bank"
                                                size="small"
                                            >
                                                {countries.map((city) => (
                                                    <MenuItem
                                                        key={city}
                                                        value={city}
                                                    >
                                                        {city}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>

                                        {/* CVC */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label=" Mã CVC"
                                                placeholder="Nhập mã CVC"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Save card details */}
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="Lưu chi tiết thẻ"
                                            />
                                        </Grid>
                                    </Grid>
                                )}

                                {/* Buttons */}
                                <Box
                                    mt={3}
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        style={{
                                            backgroundColor: "#006eff",
                                            textTransform: "none",
                                            marginRight: "20px",
                                            fontSize: "17px",
                                        }}
                                        fullWidth
                                    >
                                        200.000đ
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        style={{
                                            textTransform: "none",

                                            height: "40px",
                                        }}
                                    >
                                        Lưu đơn hàng và thoát
                                    </Button>
                                </Box>
                            </Box>
                        </div>
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
