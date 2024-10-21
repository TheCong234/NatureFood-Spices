import LoadingButton from "@mui/lab/LoadingButton";
import {
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { formatPrice } from "../../../services/functions";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { QuantityInput } from "../../../components";

export default function Cart() {
    const dispatch = useDispatch();
    const { data: cartData, loading: cartLoading } = useSelector(
        (state) => state.cart
    );

    const handelDeleteStoreCartItem = async (data) => {};

    const adjustmentStoreCartItem = async (data) => {};

    const createStoreProducts = async () => {};

    const handleGetData = async () => {};

    useEffect(() => {}, []);
    return (
        <Box>
            <Paper>
                <Paper className=" p-[20px] flex justify-between items-center">
                    <Typography variant="body1">
                        Hiển thị 1-24 trong 205 sản phẩm
                    </Typography>
                    <div className="flex items-center">
                        <Button
                            variant="outlined"
                            startIcon={<NavigateBeforeIcon />}
                            size="small"
                            sx={{ textTransform: "none", mr: 1 }}
                            onClick={() =>
                                navigate(
                                    "/seller/product/list?skip=0&take=10&type=all"
                                )
                            }
                        >
                            Tiếp tục mua sắm
                        </Button>

                        <LoadingButton
                            size="small"
                            color="warning"
                            // onClick={createStoreProducts}
                            // loading={storeProductLoading}
                            loadingPosition="start"
                            startIcon={<ShoppingCartCheckoutIcon />}
                            variant="contained"
                            sx={{ textTransform: "none" }}
                        >
                            Save
                        </LoadingButton>
                    </div>
                </Paper>
                <Box>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead className="na-table-header-tini">
                                <TableRow>
                                    <TableCell
                                        className="na-table-cell-tini"
                                        sx={{ minWidth: "400px" }}
                                    >
                                        Sản phẩm
                                    </TableCell>
                                    <TableCell
                                        className="na-table-cell-tini"
                                        align="center"
                                    >
                                        Số lượng
                                    </TableCell>
                                    <TableCell
                                        className="na-table-cell-tini"
                                        align="center"
                                        sx={{ minWidth: "120px" }}
                                    >
                                        Giá
                                    </TableCell>
                                    <TableCell
                                        className="na-table-cell-tini"
                                        align="center"
                                        sx={{ minWidth: "150px" }}
                                    >
                                        Tổng
                                    </TableCell>
                                    <TableCell
                                        className="na-table-cell-tini"
                                        align="right"
                                        sx={{ whiteSpace: "nowrap" }}
                                    >
                                        Tùy chọn
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="na-table-body-tini">
                                {cartData?.products?.map((product) => (
                                    <TableRow
                                        key={product?._id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                { border: 0 },
                                        }}
                                        className="na-table-row "
                                    >
                                        <TableCell>
                                            <div className="flex">
                                                <div className="min-w-[90px] h-full mr-3 rounded-sm overflow-hidden">
                                                    <img
                                                        src={
                                                            product?.product
                                                                ?.images?.[0]
                                                                ?.url
                                                        }
                                                        alt="product image"
                                                        className="h-[64px] w-full object-cover"
                                                    />
                                                </div>
                                                <Typography
                                                    variant="body1"
                                                    className="text-truncate-3"
                                                >
                                                    {product?.product?.name}
                                                </Typography>
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <QuantityInput
                                                quanity={product?.quantity}
                                                handleReduce={() =>
                                                    adjustmentStoreCartItem({
                                                        id: product?._id,
                                                        quantity: -1,
                                                    })
                                                }
                                                handleIncrease={() =>
                                                    adjustmentStoreCartItem({
                                                        id: product?._id,
                                                        quantity: 1,
                                                    })
                                                }
                                            />
                                        </TableCell>
                                        {/* <TableCell align="right">
                                            <div className="na-fs-16 flex justify-center font-semibold ">
                                                <small>₫</small>
                                                {formatPrice(
                                                    product?.product?.price
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="na-fs-16 flex justify-center font-semibold text-orange">
                                                <small>₫</small>
                                                {formatPrice(
                                                    product?.product?.price *
                                                        product?.quantity
                                                )}
                                            </div>
                                        </TableCell> */}
                                        <TableCell align="right">
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() =>
                                                    handelDeleteStoreCartItem(
                                                        product
                                                    )
                                                }
                                            >
                                                <DeleteIcon color="error" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </Box>
    );
}
