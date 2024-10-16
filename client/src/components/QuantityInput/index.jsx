import React, { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { red } from "../../theme/colors";

const QuantityInput = ({
    quanity,
    handleReduceQuantity,
    handleIncreaseQuantity,
}) => {
    return (
        <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button
                aria-label="add"
                size="small"
                sx={{ color: "inherit", borderColor: "grey" }}
                onClick={handleReduceQuantity}
            >
                <RemoveIcon fontSize="small" />
            </Button>
            <Button
                size="small"
                sx={{ fontSize: "16px", color: red[500], px: 3 }}
            >
                {quanity}
            </Button>
            <Button
                aria-label="add"
                size="small"
                sx={{ color: "inherit", borderColor: "grey" }}
                onClick={handleIncreaseQuantity}
            >
                <AddIcon fontSize="small" />
            </Button>
        </ButtonGroup>
    );
};

export default QuantityInput;
