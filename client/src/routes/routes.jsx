import { createBrowserRouter} from "react-router-dom";
import { EmptyLayout } from "../components/layout";
import { LoginPage } from "../components/pages";

export const router = createBrowserRouter([
    {
        path: "",
        element: <EmptyLayout/>,
        children:[
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/",
                element: "", //updating
                children: [
                    {
                        path: "",
                        element: ""
                    }
                ]
            }
        ]
    }
])