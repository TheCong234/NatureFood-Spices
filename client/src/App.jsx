import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { getcurrentUserAction } from "./hooks/Redux/User/userAction";

function App() {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.user);

    const handleGetData = async () => {
        await dispatch(getcurrentUserAction(token));
    };
    useEffect(() => {
        handleGetData();
    }, [token]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
