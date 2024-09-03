import { Box } from "@mui/material";

const NoData = ({ message }) => {
    return (
        <Box className="flex flex-col items-center py-24">
            <img
                src="/src/assets/images/no-data.png"
                alt="no-data"
                width="256px"
            />
            <p className="font-bold text-xl">{message}</p>
        </Box>
    );
};

export default NoData;
