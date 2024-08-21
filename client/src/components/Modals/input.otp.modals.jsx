import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import { verifyEmail } from "../../apis/user.apis";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function InputOTP({ open, handleClose }) {
    const [otp, setOtp] = useState("");
    const [sendOTP, setSendOTP] = useState(false);
    const [sendOtpStatus, setSendOtpStatus] = useState(false);

    const handleSendOTP = async () => {
        const randNumber = Math.floor(Math.random() * 90000) + 100000;
        const data = {
            subject: "Xác thực email",
            otp: randNumber,
        };
        const result = await verifyEmail(data);
        if (result.data.success) {
            setSendOtpStatus(true);
        }
    };

    const handleChangeInputOtp = (newValue) => {
        setOtp(newValue);
    };

    const handleSubmit = () => {
        console.log(otp);
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    component="h1"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                >
                    Xác thực Email để tạo cửa hàng cho riêng mình
                </Typography>
                <MuiOtpInput
                    length={6}
                    autoFocus
                    TextFieldsProps={{ placeholder: "-" }}
                    value={otp}
                    onChange={handleChangeInputOtp}
                />
                <Typography component="p">
                    Bấm <strong>Gửi OTP</strong> để nhận mã xác thực: &nbsp;
                    <button
                        className={
                            sendOTP
                                ? "underline decoration-solid text-gray-400"
                                : "underline decoration-solid text-blue-600"
                        }
                        onClick={() => {
                            setSendOTP(true);
                            handleSendOTP();
                        }}
                        disabled={sendOTP}
                    >
                        Gửi OTP
                    </button>
                </Typography>
                <Box sx={{ display: sendOTP ? "block" : "none" }}>
                    <p
                        className={
                            "text-green-500" + sendOtpStatus
                                ? "block"
                                : "hidden"
                        }
                    >
                        Gửi OTP thành công tới email đã đăng ký của bạn, vui
                        lòng nhập mã và "Xác thực"
                    </p>
                    <p
                        className={
                            "text-red-500" + sendOtpStatus ? "block" : "hidden"
                        }
                    >
                        Gặp vấn đề khi Gửi OTP, vui lòng kiểm tra email và thử
                        lại
                    </p>
                </Box>
                <Box textAlign={"end"}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ marginTop: 3 }}
                        onClick={handleSubmit}
                    >
                        Xác thực
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
