import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSnackNotify from "@components/SnackNotify";
import { getNotificationsAction } from "../../../hooks/Redux/Notification/notificationAction";
import { useQuery, convertTimeDuration } from "@services/functions";
import { Nodata } from "@components";
import { ICON_MAPING } from "../../../constants/enum";
import NotificationIcon from "@mui/icons-material/Notifications";
import { Avatar, Box, Pagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const NotificationItem = ({ notification }) => (
    <div className={`flex p-4 border-b border-gray-300 items-center ${!notification?.isRead && "bg-gray-200"}`}>
        <Avatar src={notification.imageUrl} sx={{ width: 56, height: 56 }} />
        <Box component={Link} to={notification?.url || "/notification"} className="flex-1 ml-3">
            <p className="text-gray-800 font-semibold">{notification.message}</p>
            <div className="flex items-center text-gray-500 text-sm">
                <span>{convertTimeDuration(notification.createdAt)}</span>
                <span className="ml-2">{ICON_MAPING[notification.type] || <NotificationIcon />}</span>
            </div>
        </Box>
    </div>
);

const productsEachPage = 10;

export default function NotificationList() {
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const query = useQuery();
    const navigate = useNavigate();
    const { data: notificationData, unreadNotificationsTotal } = useSelector((state) => state.notification);
    const params = {
        skip: query.get("skip"),
        take: query.get("take"),
        isRead: query.get("isRead"),
    };
    const handlePaginationChange = (event, value) => {
        navigate(`/notification?skip=${(value - 1) * productsEachPage}&take=${productsEachPage}&isRead=${params.isRead}`);
    };
    useEffect(() => {
        (async () => {
            const response = await dispatch(getNotificationsAction(params));
            if (response.error) {
                snackNotify("error")("Lấy danh sách thông báo thất bại");
            }
        })();
    }, [params.skip, params.take, params.isRead]);
    return (
        <div>
            {notificationData?.total == 0 ? (
                <Nodata content="Danh sách thông báo trống" />
            ) : (
                <div className=" md:w-2/3 mx-auto pb-3 bg-white rounded-lg shadow-lg">
                    <div className="flex justify-between p-4 border-b border-gray-300">
                        <h2 className="text-xl font-bold text-gray-800">Thông báo</h2>
                        <div className="flex space-x-4">
                            <button className="text-blue-500 hover:underline">Đánh dấu tất cả đã đọc</button>
                            <button className="text-blue-500 hover:underline">Cài đặt thông báo</button>
                        </div>
                    </div>
                    <div>
                        {notificationData.notifications.map((notification) => (
                            <NotificationItem key={notification._id} notification={notification} />
                        ))}
                    </div>
                    <Pagination
                        className="pt-6 flex justify-center"
                        count={Math.floor(notificationData?.total / productsEachPage + 1)}
                        page={Math.floor(query.get("skip") / productsEachPage + 1) || 1}
                        onChange={handlePaginationChange}
                        color="success"
                    />
                </div>
            )}
        </div>
    );
}
