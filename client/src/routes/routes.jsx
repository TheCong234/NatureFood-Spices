import { createBrowserRouter} from "react-router-dom";
import { EmptyLayout, MainLayout } from "../components/layout";
import { FavoritePage, HomePage, LoginPage, RegisterPage } from "../components/pages";

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
                path: "/register",
                element: <RegisterPage/>
            },


            {
                path: "/",
                element: <MainLayout/>,
                children: [
                    {
                        path: "",
                        element: <HomePage/>
                    },
                    {
                        path: "/home",
                        element: <HomePage/>
                    },
                    {
                        path: "/favorite",
                        element: <FavoritePage/>
                    }
                ]
            }
        ]
    }
])