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
        .of(
            yup
                .mixed()
                .required("You need to provide a file")
                .test("fileSize", "The file is too large", (value) => {
                    return value && value.size <= 1024 * 1024; // 1MB
                })
                .test("fileFormat", "Unsupported Format", (value) => {
                    return (
                        value &&
                        ["image/jpg", "image/jpeg", "image/png"].includes(
                            value.type
                        )
                    );
                })
        )
        .required("You need to provide at least one file")
        .min(1, "You need to provide at least one file")
        .max(5, "You can upload up to 5 files only"),
});
