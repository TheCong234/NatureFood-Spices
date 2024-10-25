import React from "react";

const OrderDetails = () => {
    return (
        <>
            {/* Order Details Header */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Chi tiết đơn hàng :#2737
                        </h2>
                        <p className="text-gray-500">
                            Ngày 21 tháng 4 năm 2019, 5:33 chiều
                        </p>
                    </div>
                    <div>
                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
                            Hoàn thành
                        </span>
                    </div>
                </div>
            </div>

            {/* Billing, Shipping and Payment Info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold">Địa chỉ thanh toán</h3>
                    <p>Anh Dương Pro</p>
                    <p>123 Nguyễn Tất Thành</p>
                    <p>Hoài Ân -Bình Định </p>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:antony@example.com"
                            className="text-blue-600 hover:underline"
                        >
                            antony@example.com
                        </a>
                    </p>
                    <p>
                        Số điện thoại:{" "}
                        <a
                            href="tel:7897987987"
                            className="text-blue-600 hover:underline"
                        >
                            7897987987
                        </a>
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold">Xác nhận giao hàng</h3>
                    <p>Anh Dương Pro</p>
                    <p>123 Nguyễn Tất Thành</p>
                    <p>Hoài Ân - Bình Định</p>
                    <p>(Miễn phí giao hàng)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold">Phương thức thanh toán</h3>
                    <p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                            alt="Visa"
                            className="inline-block w-10"
                        />{" "}
                        Anh Dương Pro
                    </p>
                    <p>**** **** **** 9809</p>
                </div>
            </div>

            {/* Products */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-4 py-2 font-semibold text-gray-600">
                                Sản phẩm
                            </th>
                            <th className="px-4 py-2 font-semibold text-gray-600">
                                Số lượng
                            </th>
                            <th className="px-4 py-2 font-semibold text-gray-600">
                                Đơn giá
                            </th>
                            <th className="px-4 py-2 font-semibold text-gray-600">
                                Tổng tiền
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">NT Dương</td>
                            <td className="border px-4 py-2">2</td>
                            <td className="border px-4 py-2">$65.00</td>
                            <td className="border px-4 py-2">$130.00</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">
                                Công gà công nghiệp
                            </td>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">$2,100.00</td>
                            <td className="border px-4 py-2">$2,100.00</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Em mi nơ keke</td>
                            <td className="border px-4 py-2">8</td>
                            <td className="border px-4 py-2">$500.00</td>
                            <td className="border px-4 py-2">$4,000.00</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end mt-4">
                    <span className="text-lg font-semibold">
                        Tổng cộng: $6,230.00
                    </span>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;
