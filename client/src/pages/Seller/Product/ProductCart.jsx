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
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { QuantityInput } from "../../../components";
import { formatPrice } from "../../../services/functions";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ProductCart() {
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
                        >
                            Tiếp tục mua sắm
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            color="warning"
                            startIcon={<ShoppingCartCheckoutIcon />}
                            sx={{ textTransform: "none" }}
                        >
                            Thanh toán
                        </Button>
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
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
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
                                                        src="https://prium.github.io/falcon/v3.21.0/assets/img/products/1.jpg"
                                                        alt="product image"
                                                        className="h-[48px] w-full object-cover"
                                                    />
                                                </div>
                                                <Typography
                                                    variant="body1"
                                                    className="text-truncate-2"
                                                >
                                                    Apple MacBook Pro 15"
                                                    Z0V20008N: 2.9GHz 6-core
                                                    8th-Gen Intel Core i9, 32GB
                                                    RAM
                                                </Typography>
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <QuantityInput quanity={3} />
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="na-fs-16 flex justify-center font-semibold ">
                                                <small>₫</small>
                                                {formatPrice(2141342)}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="na-fs-16 flex justify-center font-semibold text-orange">
                                                <small>₫</small>
                                                {formatPrice(2141342 * 3)}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
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
