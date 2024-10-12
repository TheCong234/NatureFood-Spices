import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useNavigate } from "react-router-dom";

const NAVIGATION = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "seller/dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        segment: "seller/orders",
        title: "Orders",
        icon: <ShoppingCartIcon />,
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Analytics",
    },
    {
        segment: "seller/reports",
        title: "Reports",
        icon: <BarChartIcon />,
        children: [
            {
                segment: "sales",
                title: "Sales",
                icon: <DescriptionIcon />,
            },
            {
                segment: "traffic",
                title: "Traffic",
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: "seller/integrations",
        title: "Integrations",
        icon: <LayersIcon />,
    },
];

function SellerLayout() {
    const [pathname, setPathname] = React.useState("/seller/dashboard");
    const navigate = useNavigate();

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                setPathname(String(path));
                navigate(path);
            },
        };
    }, [pathname]);

    return (
        <AppProvider navigation={NAVIGATION} router={router}>
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>
        </AppProvider>
    );
}

export default SellerLayout;
