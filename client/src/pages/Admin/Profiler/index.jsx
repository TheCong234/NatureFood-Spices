import { Button } from "@mui/material";
import React, { useState } from "react";

const ProfileSettings = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        birthday: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex bg-gray-100 min-h-screen p-7 flex-col items-center">
            {/* Profile Settings Header */}
            <h3 className="text-3xl font-bold mb-6">Chỉnh sửa hồ sơ</h3>

            <div className="flex w-full max-w-8xl">
                {/* Sidebar */}
                <div className="w-1/4 bg-white p-4 shadow-md">
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-blue-600">
                                Tổng quan
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Người điều hành</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Tài khoản quản trị</a>
                        </li>

                        <li className="mb-2">
                            <a href="#">Cài đặt Mail</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Bản tin</a>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-3/4 flex">
                    {/* Form Section */}
                    <div className="w-2/3 p-6 bg-white shadow-md mr-4">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-gray-700">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-700">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-700">
                                    Birthday
                                </label>
                                <input
                                    type="date"
                                    name="birthday"
                                    value={form.birthday}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6">
                            Save changes
                        </button>
                    </div>

                    {/* Avatar Section */}
                    <div className="w-1/3 flex flex-col items-center justify-center bg-white shadow-md p-4">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="rounded-full w-32 h-32 object-cover mb-4"
                        />
                        <button className="bg-gray-200 px-4 py-2 rounded border">
                            Upload Avatar
                        </button>
                    </div>
                </div>
            </div>

            {/* Password and Remove Account Section */}
            <div className="w-full max-w-8xl mt-8 flex justify-between">
                <div className="bg-slate-200 shadow-md p-4 w-1/2 mr-2">
                    <h4 className="text-gray-700 font-semibold mb-2">
                        Password
                    </h4>
                    <p className="text-gray-600">
                        You can reset or change your password by clicking here
                    </p>
                    <Button
                        variant="outlined"
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "8px",
                            border: "2px solid white",
                        }}
                    >
                        Change
                    </Button>
                </div>
                <div className=" shadow-md p-4 w-1/2 ml-2 bg-slate-200">
                    <h4 className="text-gray-700 font-semibold mb-2  ">
                        Remove account
                    </h4>
                    <p className="text-gray-600">
                        Once you delete your account, there is no going back.
                    </p>
                    <Button
                        variant="outlined"
                        style={{
                            backgroundColor: "white",
                            color: "red",
                            borderRadius: "8px",
                            border: "2px solid white", // Đặt viền màu trắng
                        }}
                    >
                        Deactivate
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
