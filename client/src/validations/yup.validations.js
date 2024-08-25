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
    weight: yup.number().min(0).required(),
    category: yup.string().required(),
    inventory: yup.number().min(0).max(1000000).required(),
    tags: yup.array().required(),
    images: yup
        .array()
        .min(1, "Vui lòng chọn ít nhất một hình ảnh")
        .max(5, "Bạn chỉ được phép chọn tối đa 5 hình ảnh")
        .of(
            yup.object().shape({
                name: yup.string().required("Vui lòng nhập tên hình ảnh"),
                size: yup
                    .number()
                    .positive("Kích thước hình ảnh không hợp lệ")
                    .max(
                        5 * 1024 * 1024,
                        "Kích thước hình ảnh không được vượt quá 5MB"
                    )
                    .required("Vui lòng chọn hình ảnh"),
            })
        ),
});
