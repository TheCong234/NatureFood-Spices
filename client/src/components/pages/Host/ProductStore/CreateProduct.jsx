import {
    Box,
    Button,
    Checkbox,
    FormControl,
    InputAdornment,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    styled,
    Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateProductYup } from "../../../../validations/yup.validations";
import InputJoy from "@mui/joy/Input";
import TextareaJoy from "@mui/joy/Textarea";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "../../../../assets/styles/swiper.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../../../hooks/Redux/Category/categoryAction";
import { getTagsAction } from "../../../../hooks/Redux/Tag/tagAction";

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
const CreateProduct = () => {
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
    const [imageValues, setImageValues] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(CreateProductYup),
    });

    const [categorySelected, setCategorySelected] = useState(data?.[0]?._id);
    const [tagsSelected, setTagsSelected] = useState([]);

    const handleTagSelectedChange = (event) => {
        const {
            target: { value },
        } = event;
        setTagsSelected(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };
    const onSubmitHandler = async (formData) => {
        console.log("data form: ", formData);
    };
    return (
        <Box sx={{ px: "24px", pb: "24px" }}>
            <Typography
                component="p"
                variant=""
                sx={{ fontStyle: "italic", pt: 2 }}
            >
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
                            <InputJoy
                                {...register("name")}
                                className="mt-1"
                                placeholder="Tên cửa hàng"
                                variant="outlined"
                                id="name"
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
                            <TextareaJoy
                                {...register("description")}
                                color="neutral"
                                disabled={false}
                                minRows={4}
                                placeholder="Giới thiệu về sản phẩm"
                                size="sm"
                                variant="outlined"
                                className="mt-1"
                                id="description"
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
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>

                        <input
                            {...register("images")}
                            className="w-1/2 absolute bottom-6 left-1/2 z-50 -translate-x-1/2 "
                            type="file"
                            multiple
                        />
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
                        <div className="">
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
                                    endAdornment={
                                        <InputAdornment position="end">
                                            VNĐ
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="mt-4">
                                    <p className="text-nowrap text-base text-black ">
                                        Đơn vị tính
                                    </p>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Danh mục
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={10}
                                            label="Age"
                                            onChange={() => {}}
                                            className="mt-1"
                                            size="small"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>
                                                Twenty
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Thirty
                                            </MenuItem>
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
                            {...register("category")}
                            value={categorySelected}
                            onChange={(e) =>
                                setCategorySelected(e.target.value)
                            }
                            className="mt-1 w-full"
                            size="small"
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

                        <FormControl className="w-full" sx={{ mt: 4 }}>
                            <InputLabel id="demo-multiple-checkbox-label">
                                #HangTag
                            </InputLabel>
                            <Select
                                multiple
                                value={tagsSelected}
                                onChange={handleTagSelectedChange}
                                size="small"
                                renderValue={(selected) => selected.join(", ")}
                                MenuProps={MenuProps}
                                input={<OutlinedInput label="#HangTag" />}
                            >
                                {tagData.map((tag) => (
                                    <MenuItem
                                        key={`tag-${tag.name}`}
                                        value={tag.name}
                                    >
                                        <Checkbox
                                            checked={
                                                tagsSelected.indexOf(name) > -1
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
                        <div className="">
                            <label
                                htmlFor="name"
                                className="text-base text-black "
                            >
                                Giá
                            </label>

                            <InputJoy
                                className="mt-1"
                                placeholder="Tên cửa hàng"
                                variant="outlined"
                                id="name"
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
