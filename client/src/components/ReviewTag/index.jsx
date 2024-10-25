import { Avatar, Box, Button, Rating, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ReviewTag({ review }) {
    const convertTimeDuration = (date) => {
        const now = new Date();
        const createdAt = new Date(date);
        const diffInMs = now - createdAt;

        // Chuyển đổi sang các đơn vị khác
        const diffInMinutes = Math.floor(diffInMs / 1000 / 60);
        const diffInHours = Math.floor(diffInMs / 1000 / 60 / 60);
        const diffInDays = Math.floor(diffInMs / 1000 / 60 / 60 / 24);
        const diffInMonths = Math.floor(diffInDays / 30); // Xấp xỉ
        const diffInYears = Math.floor(diffInDays / 365); // Xấp xỉ

        // Kiểm tra điều kiện để hiển thị theo đơn vị thời gian phù hợp
        let timeDifference;

        if (diffInMinutes < 60) {
            timeDifference = `${diffInMinutes} phút trước`;
        } else if (diffInHours < 24) {
            timeDifference = `${diffInHours} giờ trước`;
        } else if (diffInDays < 30) {
            timeDifference = `${diffInDays} ngày trước`;
        } else if (diffInMonths < 12) {
            timeDifference = `${diffInMonths} tháng trước`;
        } else {
            timeDifference = `${diffInYears} năm trước`;
        }
        return timeDifference;
    };
    const { product: productData, loading: productLoading, productError: productError } = useSelector((state) => state.product);

    const [isOpenFeedback, setIsOpenFeedBack] = useState(false);
    const [isTextFieldFocused, setIsTextFieldFocused] = useState(true);
    const [isButtonFocused, setIsButtonFocused] = useState(false);

    const handleFeedbackSubmit = () => {
        console.log("feeedback submit");
    };

    const handleOnBlur = () => {
        if (!isTextFieldFocused && !isButtonFocused) {
            setIsOpenFeedBack(false);
        }
    };

    return (
        <Box sx={{ display: "flex", mt: 3 }}>
            <Avatar src="/assets/images/no-avatar.png" sizes="small" />
            <Box sx={{ margin: 1, width: "100%" }}>
                <Stack direction={"row"} spacing={2}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
                        {review?.author?.username}
                    </Typography>
                    <Rating name="read-only" value={review.rating} readOnly sx={{ pt: "4px" }} />
                </Stack>
                <Typography variant="body2" component="h4">
                    {review?.body}
                </Typography>
                <Box className="flex justify-between items-center w-full">
                    <Typography variant="body2" component="h4" color="textSecondary">
                        {`Đã đăng: ${convertTimeDuration(review?.createdAt)}`}
                    </Typography>
                    <Button
                        variant="text"
                        color="primary"
                        size="small"
                        sx={{ textTransform: "none" }}
                        onClick={() => setIsOpenFeedBack(!isOpenFeedback)}
                    >
                        Trả lời
                    </Button>
                </Box>
                {isOpenFeedback && (
                    <Box>
                        <TextField
                            minRows={5}
                            multiline
                            size="small"
                            variant="outlined"
                            placeholder="Đánh giá của bạn về sản phẩm này ..."
                            className="mt-1 w-full"
                            autoFocus // Sử dụng autoFocus
                            required
                            onFocus={() => setIsTextFieldFocused(true)}
                            onBlur={() => setIsTextFieldFocused(false)}
                        />
                        <Button
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={() => {
                                setIsButtonFocused(true);
                            }}
                            onBlur={() => setIsButtonFocused(false)}
                        >
                            Thêm trả lời
                        </Button>
                    </Box>
                )}

                <Box
                    sx={{
                        mt: 1,
                        bgcolor: "#FFF7ED",
                        padding: 1,
                        display: !!review.feedback ? "flex" : "none",
                    }}
                >
                    <Avatar>Store</Avatar>
                    <Box sx={{ margin: 1 }}>
                        <Stack direction={"row"} spacing={2}>
                            <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
                                {/* {productData.store.name} */}
                                Store Name
                            </Typography>
                            <Button variant="contained" color="error" size="small">
                                Chủ Shop
                            </Button>
                        </Stack>
                        <Typography variant="body2" component="h4" sx={{ mt: 1 }}>
                            Các đơn hàng Online bên em đều hỗ trợ đồng kiểm lúc nhận hàng. Máy gửi cho anh/chị là máy nguyên SEAL mới 100% (nếu anh
                            chị không yêu cầu bóc ra cài tiếng Việt, cường lực) và đều được quay Video cẩn thận lúc gói hàng. Khi nhận hàng anh chị
                            kiểm tra bưu phẩm nguyên vẹn có tem niêm phong các góc có logo điện thoại hay. Trên tem giao hàng có thông tin: Tên, số
                            điện thoại, sản phẩm, địa chỉ người nhận sau đó có thể báo Shipper bóc hộp cacton bên ngoài kiểm tra xem bên trong có đúng
                            là sản phẩm nguyên seal anh chị đặt hay không, nếu đúng anh chị vui lòng thanh toán số tiền còn lại. Qúa trình đồng kiểm
                            anh chị quay lại video lúc mở bưu phẩm. Lưu ý anh chị kiểm tra đúng sản phẩm đặt nguyên seal chứ không bóc seal sản phẩm
                            kiểm tra bên trong Sau khi thanh toán nhận hàng thành công, anh chị nhận máy quay lại toàn bộ quá trình bóc seal mở hộp
                            sản phẩm, nếu có bất cứ vấn đề gì khi mở hộp như sản phẩm móp méo, rơi vỡ, không đúng sản phẩm thì gửi lại video bên em,
                            bên em sẽ hoàn tiền bồi thường 100% giá trị sản phẩm theo đúng chính sách. Trường hợp anh chị bóc seal mở máy lên bình
                            thường tức là quá trình nhận hàng thành công
                        </Typography>
                        <Typography variant="body2" component="h4" color="textSecondary" sx={{ mt: 1 }}>
                            10 ngày trước
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
