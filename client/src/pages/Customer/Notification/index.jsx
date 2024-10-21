import React from "react";

const notifications = [
    {
        id: 1,
        user: "Announcing the winners",
        message: "The only book awards decided by you, the readers.",
        time: "Just Now",
        icon: "📣",
        avatar: "/src/assets/images/logo.png",
    },
    {
        id: 2,
        user: "Last chance to vote",
        message: "The 2018 Falcon Choice Awards! Voting closes on November 26.",
        time: "15m",
        icon: "🗳️",
        avatar: "/src/assets/images/anhdeptroai.jpg",
    },
    {
        id: 3,
        user: "Jennifer Kent",
        message:
            "declared you as a President of Computer Science and Engineering Society.",
        time: "1h",
        icon: "🎓",
        avatar: "/src/assets/images/anhdeptroai2.jpg",
    },
    {
        id: 4,
        user: "Woody Allen",
        message:
            "Congratulate Woody Allen for starting a new position at Hewlett Packard Enterprise(HP).",
        time: "6h",
        icon: "🎁",
        avatar: "/path/to/avatar4.jpg",
    },
    {
        id: 5,
        user: "Christopher Nolan",
        message: `Mentioned you in a comment: "Congratulations! Wishing you a great future."`,
        time: "8h",
        icon: "❤️",
        avatar: "/path/to/avatar5.jpg",
    },
    {
        id: 6,
        user: "Harvard University",
        message: "Join GIS Institute Winter 2019 Event. Only three days to go.",
        time: "9h",
        icon: "🎓",
        avatar: "/path/to/avatar6.jpg",
    },
    {
        id: 7,
        user: "Peter Jackson",
        message: "Set CSE Carnival Programme in University of Cambridge.",
        time: "14h",
        icon: "📅",
        avatar: "/path/to/avatar7.jpg",
    },
    {
        id: 8,
        user: "David Fincher",
        message: "Declared you as a verified member of Stanford University.",
        time: "2d",
        icon: "✔️",
        avatar: "/path/to/avatar8.jpg",
    },
];

const NotificationItem = ({ notification }) => (
    <div className="flex items-start p-4 border-b border-gray-200">
        {/* Avatar */}
        <img
            src={notification.avatar}
            alt={notification.user}
            className="w-8 h-8 rounded-full mr-4"
        />
        <div className="flex-1">
            <p className="text-gray-800">
                <strong>{notification.user}</strong> {notification.message}
            </p>
            {/* Time and icon */}
            <div className="flex items-center text-gray-500 text-sm">
                <span>{notification.time}</span>
                <span className="ml-2">{notification.icon}</span>
            </div>
        </div>
    </div>
);

const NotificationList = () => (
    <div className="max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold text-gray-800">
                Thông báo của bạn
            </h2>
            <div className="flex space-x-4">
                <button className="text-blue-500 hover:underline">
                    Đánh dấu tất cả đã đọc
                </button>
                <button className="text-blue-500 hover:underline">
                    Cài đặt thông báo
                </button>
            </div>
        </div>
        <div>
            {notifications.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </div>
    </div>
);

export default NotificationList;
