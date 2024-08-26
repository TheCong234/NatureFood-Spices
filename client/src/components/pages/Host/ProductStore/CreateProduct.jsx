import {
    Box,
    Button,
    Checkbox,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateProductYup } from "../../../../validations/yup.validations";
import InputJoy from "@mui/joy/Input";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "../../../../assets/styles/swiper.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../../../hooks/Redux/Category/categoryAction";
import { getTagsAction } from "../../../../hooks/Redux/Tag/tagAction";
import { tryCatchWrapper } from "../../../../utils/asyncHelper";
import { createProduct } from "../../../../apis/product.api";
import { useSnackbar } from "notistack";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    padding: "10px",
    borderRadius: "10px",
}));

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};

//main
const CreateProduct = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesAction());
        dispatch(getTagsAction());
    }, []);

    const { data, loading, error } = useSelector((state) => state.category);
    const {
        data: tagData,
        loading: tagLoading,
        error: tagError,
    } = useSelector((state) => state.tag);
    const [images, setImages] = useState([]);
    const [imagesData, setImagesData] = useState([{}]);
    const [categorySelected, setCategorySelected] = useState("");
    const [tagsSelected, setTagsSelected] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(CreateProductYup),
    });

    const handleTagSelectedChange = (event) => {
        const {
            target: { value },
        } = event;
        setTagsSelected(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImagesData(files);
        const imagesUrl = files.map((file) => URL.createObjectURL(file));
        setImages(imagesUrl);
    };

    const snackResultSubmit = (variant) => (message) => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, { variant });
    };

    const onSubmitHandler = async (formData) => {
        const formDataToSend = new FormData();
        for (const key in formData) {
            if (key === "tags" && Array.isArray(formData[key])) {
                // Nếu tags là mảng, thêm từng phần tử vào FormData
                formData[key].forEach((tag) =>
                    formDataToSend.append("tags", tag)
                );
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }
        imagesData.forEach((image, index) => {
            formDataToSend.append(`images`, image);
        });
        // Log các giá trị trong FormData
        // for (let [key, value] of formDataToSend.entries()) {
        //     console.log(`${key}:`, value);
        // }

        const result = await tryCatchWrapper(createProduct, formDataToSend);
        if (result.error === null) {
            setTagsSelected([]);
            setCategorySelected("");
            setImages([]);
            reset();
            snackResultSubmit("success")("Tạo sản phẩm thành công");
        } else {
            snackResultSubmit("error")("Tạo sản phẩm thất bại");
        }
    };
    return (
        <Box sx={{ px: "24px", pb: "24px" }}>
            <Typography component="p" sx={{ fontStyle: "italic", pt: 2 }}>
                Điền đầy đủ thông tin của sản phẩm vào form để thêm sản phẩm vào
                cửa hàng của bạn
            </Typography>

            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                noValidate
                className="mt-6"
            >
                <Box className="flex">
                    <Item elevation={2} className="w-2/3 mr-6">
                        <Typography
                            component="h1"
                            variant="h6"
                            className="text-black font-bold py-2"
                            sx={{ fontWeight: "bold" }}
                        >
                            Thông tin chung
                        </Typography>
                        <div>
                            <label
                                htmlFor="name"
                                className="text-base text-black "
                            >
                                Tên sản phẩm
                            </label>
                            <TextField
                                {...register("name")}
                                className="mt-1 w-full"
                                id="name"
                                size="small"
                                placeholder="Tên cửa hàng"
                                variant="outlined"
                                error={!!errors.name}
                                helperText={errors.name?.message}
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="description"
                                className="text-base text-black"
                            >
                                Mô tả sản phẩm
                            </label>
                            <TextField
                                {...register("description")}
                                minRows={5}
                                multiline
                                size="small"
                                variant="outlined"
                                placeholder="Giới thiệu sản phẩm ..."
                                className="mt-1 w-full"
                                id="description"
                                error={!!errors.description}
                                helperText={errors.description?.message}
                                required
                            />
                        </div>
                    </Item>
                    <Item
                        elevation={2}
                        className="w-1/3 "
                        sx={{ position: "relative" }}
                    >
                        <Typography
                            component="h1"
                            variant="h6"
                            className="text-black font-bold py-2"
                            sx={{ fontWeight: "bold" }}
                        >
                            Quảng bá sản phẩm
                        </Typography>
                        <p className="text-base text-black">Hình ảnh</p>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper mt-1"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={`iamge-${index}`}>
                                    <img
                                        src={image}
                                        alt={`upload-${index}`}
                                        style={{
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </SwiperSlide>
                            ))}

                            {images.length < 1 ? (
                                <SwiperSlide>
                                    <p className="text-center text-black">
                                        Chọn ảnh cho sản phẩm
                                    </p>
                                </SwiperSlide>
                            ) : null}
                        </Swiper>

                        <Input
                            // {...register("image")}
                            type="file"
                            // multiple
                            // accept="image/*"
                            inputProps={{ multiple: true }}
                            id="images"
                            name="images"
                            onChange={handleImageChange}
                            required
                            // error={!!errors?.images}
                        />
                        {errors?.images ? (
                            <p className="text-red-500">
                                {errors.images.message}
                            </p>
                        ) : null}
                    </Item>
                </Box>

                {/* PRICE - weight */}
                <Box className="mt-6 flex">
                    <Item elevation={2} className="w-2/3 mr-6">
                        <Typography
                            component="h1"
                            variant="h6"
                            className="text-black font-bold py-2"
                            sx={{ fontWeight: "bold" }}
                        >
                            Giá thành - Đơn vị tính
                        </Typography>
                        <div>
                            <label
                                htmlFor="price"
                                className="text-base text-black "
                            >
                                Giá
                            </label>

                            <FormControl
                                variant="outlined"
                                className="w-full pr-10"
                            >
                                <OutlinedInput
                                    {...register("price")}
                                    className="mt-1 w-1/2"
                                    id="price"
                                    size="small"
                                    error={!!errors.price}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            VNĐ
                                        </InputAdornment>
                                    }
                                />
                                <p className="text-red-500">
                                    {errors?.price
                                        ? errors.price.message
                                        : null}
                                </p>
                            </FormControl>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="mt-4">
                                    <p className="text-nowrap text-base text-black ">
                                        Đơn vị tính
                                    </p>

                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={20}
                                            label="Age"
                                            onChange={() => {}}
                                            className="mt-1"
                                            size="small"
                                        >
                                            <MenuItem value={10}>
                                                Thùng
                                            </MenuItem>
                                            <MenuItem value={20}>Chai</MenuItem>
                                            <MenuItem value={30}>Gói</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="name"
                                        className="text-base text-black "
                                    >
                                        Cân nặng
                                    </label>
                                    <FormControl
                                        variant="outlined"
                                        className="w-full pr-10"
                                    >
                                        <OutlinedInput
                                            {...register("weight")}
                                            className="mt-1"
                                            id="price"
                                            size="small"
                                            error={!!errors.weight}
                                            required
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <Select
                                                        value={0}
                                                        label="Age"
                                                        onChange={(event) => {}}
                                                        className="mt-1"
                                                        sx={{
                                                            ".MuiOutlinedInput-notchedOutline":
                                                                {
                                                                    border: "none",
                                                                },
                                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                                {
                                                                    border: "none",
                                                                },
                                                        }}
                                                        size="small"
                                                    >
                                                        <MenuItem value={0}>
                                                            miligram
                                                        </MenuItem>
                                                        <MenuItem value={1}>
                                                            gram
                                                        </MenuItem>
                                                        <MenuItem value={2}>
                                                            kg
                                                        </MenuItem>
                                                    </Select>
                                                </InputAdornment>
                                            }
                                        />
                                        <p className="text-red-500">
                                            {errors?.weight
                                                ? errors.weight.message
                                                : null}
                                        </p>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </Item>

                    {/* Product type */}
                    <Item elevation={2} className="w-1/3">
                        <Typography
                            component="h1"
                            variant="h6"
                            className="text-black font-bold py-2"
                            sx={{ fontWeight: "bold" }}
                        >
                            Phân loại
                        </Typography>
                        <p className="text-base text-black">Danh mục</p>
                        <Select
                            {...register("category", {
                                required: "Category is required",
                            })}
                            value={categorySelected || ""}
                            onChange={(e) => {
                                setCategorySelected(e.target.value);
                            }}
                            className="mt-1 w-full"
                            size="small"
                            error={!!errors.category}
                            required
                        >
                            {data.map((category, index) => (
                                <MenuItem
                                    key={`category-${index}`}
                                    value={category._id}
                                >
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                        <p className="text-red-500">
                            {errors?.category ? errors.category.message : null}
                        </p>

                        <FormControl className="w-full" sx={{ mt: 4 }}>
                            <InputLabel id="demo-multiple-checkbox-label">
                                #HangTag
                            </InputLabel>
                            <Select
                                {...register("tags")}
                                multiple
                                value={tagsSelected || ""}
                                onChange={handleTagSelectedChange}
                                size="small"
                                renderValue={(selected) => selected.join(", ")}
                                MenuProps={MenuProps}
                                input={<OutlinedInput label="#HangTag" />}
                            >
                                {tagData.map((tag, index) => (
                                    <MenuItem
                                        key={`tag-${index}`}
                                        value={tag._id.toString()}
                                    >
                                        <Checkbox
                                            checked={
                                                tagsSelected.indexOf(
                                                    tag._id.toString()
                                                ) > -1
                                            }
                                        />
                                        <ListItemText primary={tag.name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Item>
                </Box>
                <Box className="mt-6">
                    <Item elevation={2} className="w-2/3 mr-6">
                        <Typography
                            component="h1"
                            variant="h6"
                            className="text-black font-bold py-2"
                            sx={{ fontWeight: "bold" }}
                        >
                            Số lượng
                        </Typography>
                        <div>
                            <label
                                htmlFor="inventory"
                                className="text-base text-black "
                            >
                                Kho
                            </label>

                            <TextField
                                {...register("inventory")}
                                className="mt-1 w-full"
                                placeholder="Tên cửa hàng"
                                variant="outlined"
                                id="inventory"
                                size="small"
                                error={!!errors.inventory}
                                helperText={errors.inventory?.message}
                                required
                            />
                        </div>
                    </Item>
                </Box>
                <Box className="text-center">
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        sx={{ mt: "24px", textTransform: "none" }}
                    >
                        Tạo sản phẩm
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default CreateProduct;
