import React, { useState, useRef } from "react";
import {
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Checkbox,
    Select,
    MenuItem,
    Divider,
    Link,
    Modal,
    Box,
    Typography,
} from "@mui/material";

function ProfileSettings() {
    const [gender, setGender] = useState("ratherNotSay");
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fileInputRef = useRef(null);
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Programmatically trigger the file input
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSave = () => {
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        handleClose(); // Close modal after saving
    };

    const buttonStyles = {
        marginTop: "20px",
        border: "2px solid #545454",
        borderRadius: "10px",
        backgroundColor: "white",
        color: "black",
        transition: "all 0.2s ease",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        fontSize: "12px",
        "&:hover": {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            backgroundColor: "white",
        },
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-center text-lg font-semibold mb-4">Mọi thay đổi ở đây sẽ được mọi người đều thấy</h2>

                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        {/* Placeholder for profile picture */}
                        <span className="text-gray-500">Ảnh đại diện</span>
                    </div>
                    <Button onClick={handleButtonClick} sx={buttonStyles}>
                        Tải ảnh lên
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        onChange={(event) => {
                            const file = event.target.files[0];
                            if (file) {
                                const validExtensions = /\.(jpg|jpeg|png|gif)$/i;
                                if (validExtensions.test(file.name) && file.size < 10485760) {
                                    console.log("Selected file:", file.name);
                                } else {
                                    console.error("File must be an image (jpg, gif, png) under 10MB");
                                }
                            }
                        }}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Phải là tệp .jpg, .gif hoặc .png có kích thước nhỏ hơn 10MB và có kích thước tối thiểu là 400px x 400px.
                    </p>
                </div>

                {/* Your Name Section without Label */}
                <div className="flex items-center mb-2">
                    <label className="text-gray-700 font-semibold mr-2">Tên của bạn -</label>
                    <span>Duong Nguyen</span>
                    <Link href="#" onClick={handleOpen} className="px-2">
                        Thay đổi hoặc xóa
                    </Link>
                    <Modal open={open} onClose={handleClose}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: 300,
                                bgcolor: "background.paper",
                                boxShadow: 24,
                                p: 4,
                                borderRadius: 1,
                            }}
                        >
                            <Typography variant="h6" component="h2">
                                Thay đổi hoặc xóa tên
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Các trường này dành cho tên đầy đủ của bạn.
                            </Typography>
                            <TextField fullWidth label="Tên" value={firstName} onChange={(e) => setFirstName(e.target.value)} sx={{ mb: 2 }} />
                            <TextField
                                fullWidth
                                label="Họ và tên lót"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <Box display="flex" justifyContent="space-between">
                                <Button variant="contained" color="primary" onClick={handleSave}>
                                    Lưu thay đổi
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={handleClose}>
                                    Thoát ra
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </div>

                <Divider className="my-3" />

                {/* Gender Section */}
                <FormControl component="fieldset" className="w-full mb-3">
                    <FormLabel className="text-gray-700 font-semibold">Giới tính -</FormLabel>
                    <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                        <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                        <FormControlLabel value="male" control={<Radio />} label="Nam" />
                        <FormControlLabel value="ratherNotSay" control={<Radio />} label="Không muốn tiết lộ" />
                        <FormControlLabel value="custom" control={<Radio />} label="Không có" />
                    </RadioGroup>
                </FormControl>

                <Divider className="my-3" />

                {/* City Section */}
                <div className="flex items-center mb-2">
                    <label className="text-gray-700 font-semibold mr-2">Thành phố -</label>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Bắt đầu nhập và chọn từ một thành phố được gợi ý để giúp người khác tìm thấy bạn"
                    />
                </div>

                <Divider className="my-3" />

                {/* Birthday Section */}
                <div className="mb-4">
                    <FormLabel className="text-gray-700 font-semibold">Ngày sinh -</FormLabel>
                    <div className="flex space-x-2 mt-2">
                        <Select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} className="flex-1" size="small">
                            <MenuItem value="">Tháng</MenuItem>
                            {Array.from({ length: 12 }, (_, i) => (
                                <MenuItem key={i + 1} value={i + 1}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select value={birthDay} onChange={(e) => setBirthDay(e.target.value)} className="flex-1" size="small">
                            <MenuItem value="">Ngày</MenuItem>
                            {Array.from({ length: 31 }, (_, i) => (
                                <MenuItem key={i + 1} value={i + 1}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                <Divider className="my-3" />

                {/* About Section */}
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700 font-semibold">Giới thiệu -</label>
                    <TextField fullWidth variant="outlined" multiline rows={3} placeholder="Hãy cho mọi người biết một chút về bạn." />
                </div>

                <Divider className="my-3" />

                {/* Favorite Materials Section */}
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700 font-semibold">Vật liệu ưa thích --</label>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Chia sẻ tối đa 13 tài liệu mà bạn thích. Ngăn cách mỗi tài liệu bằng dấu phẩy."
                    />
                </div>

                <Divider className="my-3" />

                {/* Include on Profile Section */}
                <div className="flex items-center mt-4">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cửa hàng" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Các mục yêu thích" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cửa hàng yêu thích" />
                </div>
            </div>

            <Button sx={buttonStyles}>Lưu thay đổi lại</Button>
        </div>
    );
}

export default ProfileSettings;
