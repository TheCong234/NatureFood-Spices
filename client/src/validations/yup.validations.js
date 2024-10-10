import * as yup from "yup";

export const RegisterStoreYup = yup.object().shape({
    name: yup.string().min(2).required(),
    description: yup.string().min(2).required(),
    city: yup.string().min(2).required(),
    district: yup.string().min(2).required(),
    street: yup.string().min(2).required(),
    image: yup
        .mixed()
        .required("Image is required")
        .test(
            "fileSize",
            "Tệp không được vượt quá 5MB",
            (value) => value && value[0]?.size <= 5 * 1024 * 1024
        )
        .test(
            "fileType",
            "Chỉ chấp nhận các tệp ảnh JPG, PNG hoặc PDF",
            (value) =>
                value &&
                ["image/jpeg", "image/png", "application/pdf"].includes(
                    value[0]?.type
                )
        ),
});

export const CreateProductYup = yup.object().shape({
    name: yup.string().min(2).required(),
    description: yup.string().min(2).required(),
    price: yup.number().min(0).max(1000000).required(),
    salePrice: yup.number().min(0).max(1000000).required(),
    weight: yup.number().min(0).required(),
    category: yup.string().required(),
    inventory: yup.number().min(0).max(1000000).required(),
    tags: yup.array().required(),

    // images: yup
    //     .array()
    //     .min(1, "Vui lòng chọn ít nhất một hình ảnh")
    //     .max(5, "Bạn chỉ được phép chọn tối đa 5 hình ảnh")
    //     .of(
    //         yup.object().shape({
    //             name: yup.string().required("Vui lòng nhập tên hình ảnh"),
    //             size: yup
    //                 .number()
    //                 .positive("Kích thước hình ảnh không hợp lệ")
    //                 .max(
    //                     5 * 1024 * 1024,
    //                     "Kích thước hình ảnh không được vượt quá 5MB"
    //                 )
    //                 .required("Vui lòng chọn hình ảnh"),
    //         })
    //     ),
});

export const CreateBannerYup = yup.object().shape({
    url: yup.string().required("Vui lòng thêm đường dẫn cho banner của bạn"),
});

export const CreateReviewYup = yup.object().shape({
    body: yup.string().required("Bạn cảm thấy chất lượng sản phẩm như thế nào"),
});

export const LoginYup = yup.object().shape({
    email: yup
        .string()
        .email("Vui lòng nhập một địa chỉ email hợp lệ")
        .required("Vui lòng nhập email"),
    password: yup
        .string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Vui lòng nhập mật khẩu"),
});

export const RegisterYup = yup.object().shape({
    email: yup
        .string()
        .email("Vui lòng nhập một địa chỉ email hợp lệ")
        .required("Vui lòng nhập email"),

    username: yup
        .string()
        .required("Vui lòng nhập tên người dùng")
        .min(3, "Tên người dùng phải có ít nhất 3 ký tự"), // Thay đổi theo yêu cầu của bạn

    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một chữ cái viết hoa") // Kiểm tra chữ cái viết hoa
        .matches(/\d/, "Mật khẩu phải có ít nhất một chữ số"), // Kiểm tra chữ số

    confirmPassword: yup
        .string()
        .required("Vui lòng xác nhận mật khẩu")
        .oneOf([yup.ref("password"), null], "Mật khẩu xác nhận không khớp"), // So sánh với password
});
