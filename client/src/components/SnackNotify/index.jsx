import React from "react";
import { useSnackbar } from "notistack";

const useSnackNotify = () => {
    const { enqueueSnackbar } = useSnackbar();

    return (variant) => (message) => {
        enqueueSnackbar(message, { variant });
    };
};

export default useSnackNotify;
