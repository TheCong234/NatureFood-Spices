import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { createStore } from "../../../apis/store.api";
import { Input } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { currentUser } from "../../../hooks/Redux/User/userAction";
import { RegisterStoreYup } from "../../../validations/yup.validations";

const Index = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [imageValue, setImageValue] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterStoreYup),
  });

  const handleChangeInputFile = (e) => {
    const file = e.target.files[0];
    setImageValue(file);
  };

  const snackResultSubmit = (variant) => (message) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const onSubmitHandler = async (data) => {
    const storeData = { ...data, image: imageValue };

    const result = await createStore(storeData);
    if (result) {
      snackResultSubmit("success")("Tạo cửa hàng thành công");
      dispatch(currentUser());
      reset();
    } else {
      snackResultSubmit("error")("Tạo cửa hàng thất bại");
    }
  };

  return (
    <Box>
      <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
        Đăng ký cửa hàng của bạn
      </Typography>
      <Typography component="p" variant="" sx={{ fontStyle: "italic" }}>
        Điền đầy đủ thông tin của cửa hàng vào form để đăng ký bán hàng trong hệ
        thống
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        className="mt-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
          <TextField
            {...register("name")}
            label="Tên cửa hàng"
            type="text"
            error={!!errors.name}
            helperText={errors.name?.message}
            size="small"
            className=""
            required
          />

          <TextField
            {...register("description")}
            label="Giới thiệu về cửa hàng"
            type="text"
            error={!!errors.description}
            helperText={errors.description?.message}
            size="small"
            multiline
            className=""
            required
          />

          <TextField
            {...register("city")}
            label="Thành phố"
            type="text"
            error={!!errors.city}
            helperText={errors.city?.message}
            size="small"
            required
          />
          <TextField
            {...register("district")}
            label="Quận/huyện"
            type="text"
            error={!!errors.district}
            helperText={errors.district?.message}
            size="small"
            required
          />
          <TextField
            {...register("street")}
            label="Số nhà - đường (Thôn xóm)"
            type="text"
            error={!!errors.street}
            helperText={errors.street?.message}
            size="small"
            required
          />
          <Input
            {...register("image")}
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChangeInputFile}
            error={!!errors.image}
          />
        </div>

        <Box sx={{ textAlign: "center", my: 4 }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ textTransform: "none" }}
          >
            Đăng ký cửa hàng
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Index;
