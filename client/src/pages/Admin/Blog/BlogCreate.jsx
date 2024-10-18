import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
} from "@mui/material";

// Schema Yup cho validation dựa trên BlogSchema
const blogValidationSchema = yup.object().shape({
    title: yup.string().required("Tiêu đề là bắt buộc"),
    slug: yup
        .string()
        .min(5, "Slug phải có ít nhất 5 ký tự")
        .required("Slug là bắt buộc"),
    content: yup.string().required("Nội dung là bắt buộc"),
    excerpt: yup
        .string()
        .min(5, "Tóm tắt phải có ít nhất 5 ký tự")
        .required("Tóm tắt là bắt buộc"),
    thumbnail: yup.string().url("Đường dẫn hình ảnh không hợp lệ"),
    status: yup.boolean(),
});

const Index = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(blogValidationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                {/* Tiêu đề */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Tiêu đề"
                        {...register("title")}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                </Grid>

                {/* Slug */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Slug"
                        {...register("slug")}
                        error={!!errors.slug}
                        helperText={errors.slug?.message}
                    />
                </Grid>

                {/* Nội dung */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label="Nội dung"
                        {...register("content")}
                        error={!!errors.content}
                        helperText={errors.content?.message}
                    />
                </Grid>

                {/* Tóm tắt */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Tóm tắt"
                        {...register("excerpt")}
                        error={!!errors.excerpt}
                        helperText={errors.excerpt?.message}
                    />
                </Grid>

                {/* Thumbnail */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Thumbnail URL"
                        {...register("thumbnail")}
                        error={!!errors.thumbnail}
                        helperText={errors.thumbnail?.message}
                    />
                </Grid>

                {/* Trạng thái */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox {...register("status")} />}
                        label="Đã xuất bản"
                    />
                </Grid>

                {/* Nút Submit */}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Tạo Bài Viết
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Index;
