import {
    Button,
    Link,
    TextField,
    Paper,
    Typography,
    Box,
    InputAdornment,
    IconButton,
} from "@mui/material";
import {
    Google,
    Email,
    Phone,
    Person,
    Password,
    RemoveRedEye,
    VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { register } from "../../../apis/user.apis";
const Index = () => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        username: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [formErrors, setFormErrors] = useState({
        email: "",
        phone: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    //show password
    const handleShowPassword = () => {
        setIsShowPassword((show) => !show);
    };

    //handle confirm input change
    const handleConfirmPasswordChange = (evt) => {
        setConfirmPassword(evt.target.value);
        console.log(confirmPassword);
    };

    //handle input change
    const handleChange = (evt) => {
        setFormData((data) => {
            return { ...data, [evt.target.name]: evt.target.value };
        });
    };

    //validate form
    const validate = () => {
        let errors = {};
        if (formData.email.length < 4) {
            errors.email = "Email hơn 4 kí tự";
        }
        if (formData.phone.length < 4) {
            errors.phone = "Phone hơn 4 kí tự";
        }
        if (formData.username.length < 4) {
            errors.username = "Username hơn 4 kí tự";
        }
        if (formData.password.length < 4) {
            errors.password = "password hơn 4 kí tự";
        }
        if (confirmPassword.length < 4) {
            errors.confirmPassword = "confirmPassword hơn 4 kí tự";
        }
        if (confirmPassword != formData.password) {
            errors.confirmPassword = "confirmPassword phải giống với password";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    //handle register submit
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (validate()) {
            try {
                const user = await register(formData);
                if (user) {
                    alert("Đăng ký thành công");
                }
            } catch (error) {
                alert(error);
            }
        }
    };
    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="w-1/2">
                <Paper elevation={3} sx={{ padding: 6 }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        Đăng ký
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                            id="email"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            required
                            fullWidth
                            name="email"
                            onChange={handleChange}
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                            size="small"
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone />
                                    </InputAdornment>
                                ),
                            }}
                            id="phone"
                            label="Số điện thoại"
                            type="tel"
                            autoComplete="phone"
                            required
                            fullWidth
                            name="phone"
                            onChange={handleChange}
                            sx={{ mt: 2 }}
                            error={!!formErrors.phone}
                            helperText={formErrors.phone}
                            size="small"
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}
                            id="username"
                            label="Tên người dùng"
                            type="text"
                            autoComplete="username"
                            required
                            fullWidth
                            name="username"
                            onChange={handleChange}
                            sx={{ mt: 2 }}
                            error={!!formErrors.username}
                            helperText={formErrors.username}
                            size="small"
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Password />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <IconButton onClick={handleShowPassword}>
                                        {isShowPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <RemoveRedEye />
                                        )}
                                    </IconButton>
                                ),
                            }}
                            id="password"
                            label="Mật khẩu"
                            type={isShowPassword ? "password" : "text"}
                            autoComplete="password"
                            required
                            fullWidth
                            name="password"
                            onChange={handleChange}
                            sx={{ mt: 2 }}
                            error={!!formErrors.password}
                            helperText={formErrors.password}
                            size="small"
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Password />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <IconButton onClick={handleShowPassword}>
                                        {isShowPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <RemoveRedEye />
                                        )}
                                    </IconButton>
                                ),
                            }}
                            id="confirmPassword"
                            label="Mật khẩu xác thực"
                            type={isShowPassword ? "password" : "text"}
                            autoComplete="confirm-password"
                            required
                            fullWidth
                            name="confirmPassword"
                            onChange={handleConfirmPasswordChange}
                            sx={{ mt: 2 }}
                            error={!!formErrors.confirmPassword}
                            helperText={formErrors.confirmPassword}
                            size="small"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Đăng ký
                        </Button>
                        <Button
                            endIcon={<Google />}
                            type="button"
                            fullWidth
                            variant="contained"
                            color="warning"
                        >
                            Đăng nhập với Google
                        </Button>
                        <Box sx={{ textAlign: "end", mt: 2 }}>
                            <Link href="/login">
                                Quay trở lại trang Đăng nhập
                            </Link>
                        </Box>
                    </Box>
                </Paper>
            </div>
        </div>
    );
};

export default Index;
