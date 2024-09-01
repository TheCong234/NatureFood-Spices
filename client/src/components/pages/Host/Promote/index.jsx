import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateBannerModal from "../../../Modals/CreateBannerModal";
import { useState } from "react";

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

const headerItems = [
    "Hình ảnh",
    "Ngày đk",
    "Ngày hết hạn",
    "Trạng thái",
    "Tùy chọn",
];
const Index = () => {
    const [isOpenCreateBanner, setIsOpenCreateBanner] = useState(false);
    const handleOpenCreateBanner = () => setIsOpenCreateBanner(true);
    const handleCloseCreateBanner = () => setIsOpenCreateBanner(false);
    return (
        <Box>
            <Box className="flex justify-between p-2">
                <p>Tìm kiếm</p>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ textTransform: "none" }}
                    onClick={() => setIsOpenCreateBanner(true)}
                >
                    Đăng ký Banner
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "black" }}>
                        <TableRow>
                            {headerItems.map((item, index) => (
                                <TableCell
                                    key={`header cell ${index}`}
                                    sx={{ color: "white" }}
                                    align={index === 0 ? "left" : "right"}
                                >
                                    {item}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                    {row.protein}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CreateBannerModal open={isOpenCreateBanner} />
        </Box>
    );
};

export default Index;
