import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

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
                />
                <Box textAlign={"end"}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ marginTop: 3 }}
                    >
                        Xác thực
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
