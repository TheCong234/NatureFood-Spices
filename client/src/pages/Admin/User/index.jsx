import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleAction } from "../../../hooks/Redux/User/userAction";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Chip, IconButton, Tooltip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function Index() {
    const dispatch = useDispatch();
    const { data: userData, loading: userLoading } = useSelector(
        (state) => state.user
    );

    const handleGetData = async () => {
        const params = {
            role: "user",
        };
        const response = await dispatch(getPeopleAction(params));
        console.log(response);
    };
    useEffect(() => {
        handleGetData();
    }, []);
    return (
        <Box sx={{ maxWidth: "100%", overflowX: "auto" }}>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Tên</StyledTableCell>
                            <StyledTableCell
                                align="right"
                                className="whitespace-nowrap"
                            >
                                Email
                            </StyledTableCell>
                            <StyledTableCell
                                align="right"
                                className="whitespace-nowrap"
                            >
                                Xác minh email
                            </StyledTableCell>
                            <StyledTableCell
                                align="right"
                                className="whitespace-nowrap"
                            >
                                Phone
                            </StyledTableCell>
                            <StyledTableCell
                                align="right"
                                className="whitespace-nowrap"
                            >
                                Đơn hàng
                            </StyledTableCell>
                            <StyledTableCell
                                align="right"
                                className="whitespace-nowrap"
                            >
                                Trạng thái
                            </StyledTableCell>
                            <StyledTableCell
                                align="right"
                                className="whitespace-nowrap"
                            >
                                Cập nhật
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData?.users?.map((user) => (
                            <StyledTableRow key={user._id}>
                                <StyledTableCell
                                    component="th"
                                    scope="row"
                                    className="na-flex na-alight-middle"
                                >
                                    <Avatar className="mr-3">
                                        {user.username[0]}
                                    </Avatar>{" "}
                                    {user.username}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {user.email}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {user.emailVerify ? (
                                        <Chip
                                            icon={<DoneIcon />}
                                            label="Đã xác minh"
                                            color="success"
                                            size="small"
                                        />
                                    ) : (
                                        <Chip
                                            icon={<CloseIcon />}
                                            label="Chưa xác minh"
                                            color="warning"
                                            size="small"
                                        />
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {user.phone || "..."}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {11}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {user.status ? (
                                        <Chip
                                            label="Tạm khóa"
                                            color="error"
                                            size="small"
                                        />
                                    ) : (
                                        <Chip
                                            label="Hoạt động"
                                            color="success"
                                            size="small"
                                        />
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {user.status ? (
                                        <Tooltip
                                            title="Mở khóa tài khoản"
                                            placement="top"
                                        >
                                            <IconButton
                                                color="error"
                                                aria-label="add an alarm"
                                            >
                                                <LockOpenIcon />
                                            </IconButton>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip
                                            title="Khóa tài khoản"
                                            placement="top"
                                        >
                                            <IconButton
                                                color="error"
                                                aria-label="add an alarm"
                                            >
                                                <LockIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
