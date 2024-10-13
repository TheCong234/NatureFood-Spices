import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./hooks/Redux/store.js";
import { SnackbarProvider } from "notistack";
import { Container } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={3}> 
                <App /> 
        </SnackbarProvider>
    </Provider>
);
