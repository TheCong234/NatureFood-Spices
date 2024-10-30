import React, { useState } from "react";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    Typography,
    Box,
    Paper,
    InputAdornment,
    IconButton,
    Link,
    Divider,
    FormControlLabel,
    Switch,
} from "@mui/material";
import { styled } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
}));

function ProfileSettings() {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });
    const [postalMail, setPostalMail] = useState(false);
    const [phoneCalls, setPhoneCalls] = useState(false);

    const toggleShowPassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <Box className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
            <StyledPaper
                elevation={3}
                className="w-3/4 "
                sx={{
                    borderRadius: "14px",
                }}
            >
                <Typography variant="h6" className="mb-4 font-semibold">
                    Thông tin người dùng
                </Typography>
                <Box className="mb-4">
                    <Typography variant="body1">Tên:</Typography>
                    <Typography variant="body1" color="textSecondary" className="font-semibold">
                        Duong Nguyen
                    </Typography>
                </Box>
                <Box className="mb-4">
                    <Typography variant="body1">Là thành viên từ ngày:</Typography>
                    <Typography variant="body1" color="textSecondary" className="font-semibold">
                        Ngày 29 tháng 10 năm 2024
                    </Typography>
                </Box>
                <Button
                    sx={{
                        border: "2px solid #545454",
                        borderRadius: "25px",
                        backgroundColor: "white",
                        color: "black",
                        transition: "all 0.2s ease",
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        fontSize: "12px",
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                            backgroundColor: "white",
                        },
                    }}
                >
                    Chỉnh sửa hồ sơ
                </Button>
            </StyledPaper>

            <StyledPaper
                elevation={3}
                className="w-3/4"
                sx={{
                    borderRadius: "14px",
                }}
            >
                <Typography variant="h6" className="mb-4 font-semibold">
                    Cài đặt vị trí
                </Typography>
                <Box className="mb-4">
                    <Typography variant="body1" color="textSecondary">
                        Đất nước
                    </Typography>
                    <Select fullWidth defaultValue="Vietnam" size="small" sx={{ width: "70%" }}>
                        <MenuItem value="Vietnam">Vietnam</MenuItem>
                        <MenuItem value="United States">United States</MenuItem>
                        <MenuItem value="Canada">Canada</MenuItem>
                    </Select>
                </Box>
                <Box className="mb-4">
                    <Typography variant="body1" color="textSecondary">
                        Ngôn ngữ
                    </Typography>
                    <Select fullWidth defaultValue="English (US)" size="small" sx={{ width: "70%" }}>
                        <MenuItem value="English (US)">English (US)</MenuItem>
                        <MenuItem value="Vietnamese">Vietnamese</MenuItem>
                        <MenuItem value="French">French</MenuItem>
                    </Select>
                </Box>
                <Box className="mb-4">
                    <Typography variant="body1" color="textSecondary">
                        Tiền tệ
                    </Typography>
                    <Select fullWidth defaultValue="VND" size="small" sx={{ width: "70%" }}>
                        <MenuItem value="VND">Vietnamese Dong (VND)</MenuItem>
                        <MenuItem value="USD">US Dollar (USD)</MenuItem>
                        <MenuItem value="EUR">Euro (EUR)</MenuItem>
                    </Select>
                </Box>
                <Button
                    sx={{
                        border: "2px solid #545454",
                        borderRadius: "25px",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.2s ease",
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        fontSize: "12px",
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
                            backgroundColor: "black",
                        },
                    }}
                >
                    Lưu cài đặt
                </Button>
            </StyledPaper>
            <Box
                sx={{
                    width: "75%",

                    margin: "auto",
                    padding: 3,
                    border: "1px solid #ddd",
                    borderRadius: "14px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white",
                    mb: 4,
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Mật khẩu
                </Typography>
                <TextField
                    label="Mật khẩu hiện tại"
                    variant="outlined"
                    type={showPassword.current ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => toggleShowPassword("current")} edge="end">
                                    {showPassword.current ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Mật khẩu mới"
                    variant="outlined"
                    type={showPassword.new ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => toggleShowPassword("new")} edge="end">
                                    {showPassword.new ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Nhập lại mật khẩu mới "
                    variant="outlined"
                    type={showPassword.confirm ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => toggleShowPassword("confirm")} edge="end">
                                    {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    sx={{
                        border: "2px solid #545454",
                        borderRadius: "25px",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.2s ease",
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        fontSize: "12px",
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.7)",
                            backgroundColor: "#333",
                        },
                    }}
                >
                    Lưu thay đổi mật khẩu
                </Button>
                <Typography variant="body2" sx={{ marginTop: 2, textAlign: "center" }}>
                    Cần trợ giúp ?{" "}
                    <Link href="https://help.etsy.com" target="_blank" rel="noopener">
                        Tìm câu trả lời tại Trung tâm trợ giúp NatureFood
                    </Link>
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "75%",
                    margin: "auto",
                    padding: 3,
                    border: "1px solid #ddd",
                    borderRadius: "14px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    mb: 4,
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Email
                </Typography>
                <Typography variant="body2">email hiện tại</Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    denchenhvenh@gmail.com
                </Typography>
                <Typography variant="body2">Trạng thái </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "green" }}>
                    Đã xác nhận
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Lưu email của bạn
                </Typography>
                <TextField label="email mới" variant="outlined" fullWidth margin="normal" size="small" />
                <TextField label="nhập lại email mới" variant="outlined" fullWidth margin="normal" size="small" />
                <TextField label="Mật khẩu NatureFood của bạn" variant="outlined" type="password" fullWidth margin="normal" size="small" />
                <Button
                    sx={{
                        border: "2px solid #545454",
                        borderRadius: "25px",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.2s ease",
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        fontSize: "12px",
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.7)",
                            backgroundColor: "#333",
                        },
                    }}
                >
                    Lưu thay đổi
                </Button>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                    Địa chỉ email của bạn sẽ không thay đổi cho đến khi bạn xác nhận qua email.
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "75%",
                    margin: "auto",
                    padding: 3,
                    border: "1px solid #ddd",
                    borderRadius: "14px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Giao tiếp từ NatureFood
                </Typography>
                <FormControlLabel
                    control={<Switch checked={postalMail} onChange={(e) => setPostalMail(e.target.checked)} />}
                    label="Thông báo mail"
                />
                <Typography variant="body2" sx={{ ml: 4 }}>
                    Cho phép NatureFood thông báo
                </Typography>

                <FormControlLabel
                    control={<Switch checked={phoneCalls} onChange={(e) => setPhoneCalls(e.target.checked)} />}
                    label="Gọi điện thoại"
                />
                <Typography variant="body2" sx={{ ml: 4 }} className="pb-6">
                    Cho phép NatureFood liên lạc qua điện thoại
                </Typography>
                <Button
                    sx={{
                        border: "2px solid #545454",
                        borderRadius: "25px",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.2s ease",
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        fontSize: "12px",
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.7)",
                            backgroundColor: "#333",
                        },
                    }}
                >
                    Lưu sở thích giao tiếp
                </Button>
            </Box>
            <Box
                className="p-6 w-3/4 mx-auto border border-gray-300 rounded-md mb-6 mt-6 "
                sx={{
                    borderRadius: "14px",
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h6" className="font-bold mb-2">
                    Khóa tài khoản của bạn
                </Typography>
                <Typography className="mb-4">Điều gì xảy ra khi bạn đóng tài khoản?</Typography>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600 space-y-1">
                    <li>Tài khoản của bạn sẽ không hoạt động cho đến khi bạn mở lại.</li>
                    <li>Hồ sơ của bạn sẽ không còn xuất hiện ở bất kỳ đâu trên NatureFood.</li>
                    <li>Chúng tôi sẽ đóng mọi trường hợp không giao hàng mà bạn đã mở.</li>
                    <li>Cài đặt tài khoản của bạn sẽ vẫn nguyên vẹn và không ai có thể sử dụng tên người dùng của bạn.</li>
                </ul>
                <Typography className="mb-4 text-sm text-gray-600">
                    Bạn có thể mở lại tài khoản của mình bất cứ lúc nào. Chỉ cần đăng nhập lại vào NatureFood hoặc{" "}
                    <Link href="#" underline="hover">
                        liên hệ hỗ trợ NatureFood
                    </Link>{" "}
                    để được giúp đỡ.
                </Typography>
                <Typography className="mb-4 text-sm text-gray-600">
                    Bạn muốn xóa vĩnh viễn tài khoản của mình? Hãy đến{" "}
                    <Link href="#" underline="hover">
                        Cài đặt quyền riêng tư
                    </Link>{" "}
                    và nhấp vào "Yêu cầu xóa dữ liệu của bạn".
                </Typography>
                <hr />
                <Button
                    sx={{
                        marginTop: "10px",
                        border: "2px solid #545454",
                        borderRadius: "25px",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.2s ease",
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        fontSize: "12px",
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.7)",
                            backgroundColor: "#333",
                        },
                    }}
                >
                    Khóa tài khoản
                </Button>
            </Box>
            <Box
                className="p-6 w-3/4 mx-auto border border-gray-300 rounded-md"
                sx={{
                    borderRadius: "14px",
                    backgroundColor: "white",
                }}
            >
                <Typography className="mb-2 font-bold">Các thiết lập khác</Typography>
                <Link href="#" underline="hover" className="block mb-1">
                    Ứng dụng
                </Link>
                <Link href="#" underline="hover" className="block">
                    Nguyên mẫu
                </Link>
            </Box>
        </Box>
    );
}

export default ProfileSettings;
