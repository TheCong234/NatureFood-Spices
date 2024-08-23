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

export const CreateProductYup = null;
