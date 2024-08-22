import footerBackground from "../../../assets/images/footer.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import {
    Box,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

const data = [
    {
        header: "Nature Food",
        data: [
            {
                name: "Gia vị",
                url: "",
            },
            {
                name: "Souce",
                url: "",
            },
            {
                name: "Muối Tây Ninh",
                url: "",
            },
            {
                name: "Dầu điều",
                url: "",
            },
        ],
    },
    {
        header: "Nature Food",
        data: [
            {
                name: "Gia vị",
                url: "",
            },
            {
                name: "Souce",
                url: "",
            },
            {
                name: "Muối Tây Ninh",
                url: "",
            },
            {
                name: "Dầu điều",
                url: "",
            },
        ],
    },
    {
        header: "Nature Food",
        data: [
            {
                name: "Gia vị",
                url: "",
            },
            {
                name: "Souce",
                url: "",
            },
            {
                name: "Muối Tây Ninh",
                url: "",
            },
            {
                name: "Dầu điều",
                url: "",
            },
        ],
    },
];

const socials = [
    {
        color: "primary",
        icon: <FacebookIcon />,
    },
    {
        color: "error",
        icon: <InstagramIcon />,
    },
    {
        color: "primary",
        icon: <TwitterIcon />,
    },
    {
        color: "success",
        icon: <PhoneIcon />,
    },
];

const Index = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundImage: `url(${footerBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container>
                <div className="flex justify-between items-center h-[300px]">
                    <Stack spacing={10} direction="row">
                        {data.map((dt, index) => (
                            <Stack spacing={2} key={index}>
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {dt.header}
                                </Typography>
                                {dt.data.map((d, id) => (
                                    <Link
                                        key={id}
                                        className="text-black font-normal"
                                        to={d.url}
                                    >
                                        {d.name}
                                    </Link>
                                ))}
                            </Stack>
                        ))}
                    </Stack>

                    <div className="text-center">
                        <Typography
                            component="h1"
                            variant="h6"
                            sx={{ fontWeight: "bold" }}
                        >
                            Follow us
                        </Typography>
                        <ButtonGroup>
                            {socials.map((social, index) => (
                                <IconButton key={index} color={social.color}>
                                    {social.icon}
                                </IconButton>
                            ))}
                        </ButtonGroup>
                    </div>
                </div>
                <div className="flex justify-between py-4 ">
                    <p className="text-sm">@2024 tranthecong99@gmail.com</p>
                    <Stack
                        direction="row"
                        divider={
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    height: "16px",
                                    alignSelf: "center",
                                    borderColor: "black",
                                    borderRightWidth: 2,
                                }} // Giảm chiều cao của Divider
                            />
                        }
                        spacing={1}
                    >
                        <Typography
                            component="span"
                            sx={{ fontSize: "0.875rem" }}
                        >
                            Team of service
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ fontSize: "0.875rem" }}
                        >
                            Primary Policy
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ fontSize: "0.875rem" }}
                        >
                            Refund Policy
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ fontSize: "0.875rem" }}
                        >
                            Primary Policy
                        </Typography>
                    </Stack>
                </div>
            </Container>
        </Box>
    );
};

export default Index;
