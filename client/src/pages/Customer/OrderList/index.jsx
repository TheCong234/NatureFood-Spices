import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const orders = [
    {
        id: "#181",
        user: "Ricky Antony",
        email: "ricky@example.com",
        date: "20/04/2019",
        shipTo: "2392 Main Avenue, Penasauka, New Jersey 02149",
        method: "Via Flat Rate",
        status: "Completed",
        amount: "$99",
    },
    {
        id: "#182",
        user: "Kin Rossow",
        email: "kin@example.com",
        date: "20/04/2019",
        shipTo: "1 Hollywood Blvd,Beverly Hills, California 90210",
        method: "Via Free Shipping",
        status: "Processing",
        amount: "$120",
    },
];

const OrderTable = () => {
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [menuOpen, setMenuOpen] = useState(null);
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedOrders([]);
        } else {
            setSelectedOrders(orders.map((order) => order.id));
        }
        setSelectAll(!selectAll);
    };

    const handleSelectOrder = (id) => {
        if (selectedOrders.includes(id)) {
            setSelectedOrders(
                selectedOrders.filter((orderId) => orderId !== id)
            );
        } else {
            setSelectedOrders([...selectedOrders, id]);
        }
    };

    const toggleMenu = (index) => {
        setMenuOpen(menuOpen === index ? null : index);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Đặt hàng</h2>
                {selectedOrders.length > 0 ? (
                    <div className="flex space-x-2">
                        <select className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100">
                            <option>Chọn tất cả</option>
                            <option>Đền bù</option>
                            <option>Xóa</option>
                            <option>Lưu trữ</option>
                        </select>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Áp dụng
                        </button>
                    </div>
                ) : (
                    <div className="flex space-x-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Làm mới
                        </button>
                        <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100">
                            Lọc
                        </button>
                        <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100">
                            Xuất ra
                        </button>
                    </div>
                )}
            </div>

            <div className="border rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Đặt hàng
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ngày
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Địa chỉ
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Trạng thái
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Số tiền
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={selectedOrders.includes(
                                            order.id
                                        )}
                                        onChange={() =>
                                            handleSelectOrder(order.id)
                                        }
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="font-medium text-blue-600">
                                        {order.id} by {order.user}
                                    </span>
                                    <p className="text-sm text-gray-500">
                                        {order.email}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {order.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p>{order.shipTo}</p>
                                    <p className="text-sm text-gray-500">
                                        {order.method}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${
                                            order.status === "Completed"
                                                ? "bg-green-100 text-green-800"
                                                : order.status === "Processing"
                                                ? "bg-blue-100 text-blue-800"
                                                : order.status === "Pending"
                                                ? "bg-orange-100 text-orange-800"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {order.amount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="relative">
                                        <button
                                            className="text-gray-500 hover:text-gray-700"
                                            onClick={() => toggleMenu(index)}
                                        >
                                            <MoreVertIcon />
                                        </button>
                                        {menuOpen === index && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                    Đã hoàn tất
                                                </button>
                                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                    Đang xử lý
                                                </button>
                                                <button className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full text-left">
                                                    đang chờ
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;
