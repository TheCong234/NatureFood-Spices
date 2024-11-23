import React, { useEffect } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AccountLockedNotification() {
    const navigate = useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/logout");
        }, 10000); // 30 giây = 30,000ms

        // Dọn dẹp timeout khi component unmount
        return () => clearTimeout(timeout);
    }, []);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
            }}
        >
            <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom sx={{ color: "#d32f2f", fontWeight: "bold", textAlign: "center" }}>
                        Tài khoản bị khóa
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center", mb: 3 }}>
                        Tài khoản của bạn đã bị khóa do vi phạm chính sách. Nếu bạn nghĩ đây là nhầm lẫn, vui lòng liên hệ hỗ trợ.
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>
                        <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>
                            Liên hệ hỗ trợ
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
