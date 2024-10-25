import { Button, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { formatDate, useQuery } from "../../../services/functions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useSnackNotify from "../../../components/SnackNotify";
import { useEffect } from "react";
import { getBlogsAction } from "../../../hooks/Redux/Blog/blogAction";

export default function Blogs() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const query = useQuery();
    const { data: blogData } = useSelector((state) => state.blog);

    const handleGetData = async () => {
        const data = {
            skip: query.get("skip"),
            take: query.get("take"),
            type: "enable",
        };
        const response = await dispatch(getBlogsAction(data));
        if (response?.error) {
            snackNotify("error")("Lấy blogs lỗi");
        }
    };

    useEffect(() => {
        handleGetData();
    }, [query.get("skip"), query.get("take")]);
    return (
        <div>
            <div className=" p-[20px] flex justify-between items-center">
                <Typography variant="body1">Hiển thị 1-24 trong 205 bài viết</Typography>
                <div className="flex items-center">
                    <Button
                        variant="outlined"
                        startIcon={<NavigateBeforeIcon />}
                        size="small"
                        sx={{ textTransform: "none", mr: 1 }}
                        onClick={() => navigate("/product/list?skip=0&take=10")}
                    >
                        Trở lại trang mua sắm
                    </Button>
                </div>
            </div>
            {blogData?.blogs.map((item) => (
                <div key={item?._id}>
                    <div className="flex">
                        <div className="w-1/4 h-[180px]">
                            <img src={item?.image?.url} alt="" className="h-full object-cover rounded-xl" />
                        </div>
                        <div className="w-full text-truncate-3 pl-6">
                            <p className="text-xl font-bold">{item?.title}</p>
                            <p className="text-truncate-2 mt-3">{item?.content}</p>
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                Ngày viết:&nbsp;{formatDate(item?.createdAt)}
                            </Typography>
                            <Button
                                variant="outlined"
                                color="warning"
                                size="small"
                                sx={{ mt: 2, textTransform: "none" }}
                                onClick={() => navigate(`/blog/${item?.slug}`)}
                            >
                                Đọc tiếp
                            </Button>
                        </div>
                    </div>
                    <hr className="my-8" />
                </div>
            ))}
        </div>
    );
}
