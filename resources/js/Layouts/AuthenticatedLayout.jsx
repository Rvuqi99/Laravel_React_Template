import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Button,
    TextField,
    InputAdornment,
    Divider,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import logo1 from "@/Images/logo1.png";
import { styles } from "@/Components/Styles";
import {
    AccountCircle,
    Calculate,
    Home,
    KeyboardArrowDown,
    Logout,
    Notifications,
    Payment,
    PendingActions,
    Person,
    ReceiptLong,
    Search,
    Settings,
    SupportAgent,
} from "@mui/icons-material";
import Footer from "./Footer";

const AuthenticatedLayout = ({ header, children }) => {
    const user = usePage().props.auth.user;
    const [showNav, setShowNav] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [nav, setNav] = useState([
        {
            id: 1,
            name: "Papan Pengguna",
            icon: <Home sx={{ fontSize: "30px" }} />,
            haveList: false,
            path: "dashboard",
        },
        {
            id: 2,
            name: "Bayaran",
            icon: <Payment sx={{ fontSize: "30px" }} />,
            haveList: true,
            path: "dashboard",
        },
        {
            id: 3,
            name: "Kalkulator Zakat",
            icon: <Calculate sx={{ fontSize: "30px" }} />,
            haveList: true,
            path: "dashboard",
        },
        {
            id: 4,
            name: "Bantuan",
            icon: <PendingActions sx={{ fontSize: "30px" }} />,
            haveList: true,
            path: "dashboard",
        },
        {
            id: 5,
            name: "Info",
            icon: <Notifications sx={{ fontSize: "30px" }} />,
            haveList: true,
            path: "dashboard",
        },
        {
            id: 6,
            name: "Hubungi Kami",
            icon: <SupportAgent sx={{ fontSize: "30px" }} />,
            haveList: false,
            path: "dashboard",
        },
    ]);
    const [bayaranNav, setBayaranNav] = useState([
        {
            id: 1,
            name: "Pembayaran",
            icon: <Payment sx={{ fontSize: "25px" }} />,
            path: "dashboard",
        },
        {
            id: 2,
            name: "Rekod Pembayaran",
            icon: <ReceiptLong sx={{ fontSize: "25px" }} />,
            path: "dashboard",
        },
    ]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={styles.authenticated_container}>
            <AppBar position="static" color="default" elevation={1}>
                <Box sx={styles.authenticated_appbar_top}>
                    <Box sx={styles.authenticated_appbar_top_left}>
                        <Box
                            component="img"
                            src={logo1}
                            sx={{
                                height: { md: "70px", xs: "50px" },
                            }}
                        />
                        <Typography
                            sx={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "20px",
                            }}
                        >
                            Tabung Baitulmal Sarawak
                        </Typography>
                    </Box>
                    <Box sx={styles.authenticated_appbar_top_right}>
                        <TextField
                            placeholder="Cari..."
                            fullWidth
                            // value={formData.password}
                            // onChange={(e) =>
                            //     updatedFormData({ password: e.target.value })
                            // }
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment
                                            position="start"
                                            sx={{ mr: 1.5 }}
                                        >
                                            <Search
                                                sx={{
                                                    color: "#AAAAAA",
                                                    fontSize: 20,
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        fontSize: "16px",
                                        color: "#AAAAAA",
                                    },
                                },
                            }}
                            sx={{
                                width: { md: "300px", xs: "100%" },
                                "& .MuiOutlinedInput-root": {
                                    color: "black",
                                    borderRadius: "10px",
                                    height: "40px",
                                    "& fieldset": { borderColor: "#AAAAAA" },
                                },
                                "& .MuiInputBase-input": {
                                    color: "#000000", // actual input text color
                                    fontSize: "16px",
                                },
                                "& .MuiInputBase-input::placeholder": {
                                    color: "#AAAAAA",
                                    opacity: 1, // ensures it’s not transparent
                                },
                            }}
                        />
                        {/* <Button sx={styles.authenticated_login_button}>
                            <Typography
                                sx={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                                Log masuk
                            </Typography>
                        </Button> */}
                        <Button
                            sx={{
                                backgroundColor: "white",
                                gap: "10px",
                                textTransform: "none",
                            }}
                            onClick={handleClick}
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            <AccountCircle
                                sx={{ color: "#176117", fontSize: "50px" }}
                            />
                            <Box
                                sx={{
                                    display: { md: "flex", xs: "none" },
                                    gap: "10px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        color: "black",
                                    }}
                                >
                                    Ali Bin Abu
                                </Typography>
                                <KeyboardArrowDown sx={{ color: "black" }} />
                            </Box>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    "aria-labelledby": "basic-button",
                                },
                            }}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{ gap: "10px" }}
                            >
                                <Person
                                    sx={{ color: "#007C3D", fontSize: "25px" }}
                                />
                                <Typography
                                    sx={{ color: "black", fontSize: "14px" }}
                                >
                                    Profil
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}
                                sx={{ gap: "10px" }}
                            >
                                <Settings
                                    sx={{ color: "#4A4A4A", fontSize: "25px" }}
                                />
                                <Typography
                                    sx={{ color: "black", fontSize: "14px" }}
                                >
                                    Tukar Kata Laluan
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}
                                sx={{ gap: "10px" }}
                            >
                                <Logout
                                    sx={{ color: "#C04040", fontSize: "25px" }}
                                />
                                <Typography
                                    sx={{ color: "black", fontSize: "14px" }}
                                >
                                    Log Keluar
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
                <Toolbar sx={styles.authenticated_appbar_bottom}>
                    <Box
                        sx={{
                            display: { md: "flex", xs: "none" },
                            gap: "20px",
                        }}
                    >
                        {nav.map((item) => (
                            <Button
                                key={item.id}
                                sx={styles.authenticated_nav_link}
                                href={route(item.path)}
                            >
                                {item.icon}
                                {item.name}
                                {item.haveList && <KeyboardArrowDown />}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={styles.navbar_header_title}>
                        {nav.find((item) => item.name === header)?.icon}
                        <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                            {header}
                        </Typography>
                    </Box>

                    <IconButton
                        edge="end"
                        sx={{ display: { md: "none" }, color: "white" }}
                        onClick={() => setShowNav((prev) => !prev)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {showNav && (
                <Box
                    sx={{
                        display: { sm: "none", xs: "grid" },
                        backgroundColor: "#fff",
                    }}
                >
                    {nav
                        .filter((item) => item.name !== header) // ✅ filter out the one matching header
                        .map((item) => (
                            <React.Fragment key={item.id}>
                                <Button
                                    sx={styles.small_navbar_link}
                                    href={route(item.path)}
                                >
                                    {item.icon}
                                    {item.name}
                                    {item.haveList && <KeyboardArrowDown />}
                                </Button>
                                <Divider />
                            </React.Fragment>
                        ))}
                    <Button fullWidth href={route("logout")} color="error">
                        Log Out
                    </Button>
                </Box>
            )}

            {/* {header && (
                <Box sx={{ backgroundColor: "#fff", boxShadow: 1, p: 3 }}>
                    {header}
                </Box>
            )} */}

            <Box sx={{ display: { md: "flex", xs: "block" }, flex: 1 }}>
                <Box
                    sx={{
                        display: { md: "block", xs: "none" },
                        backgroundColor: "white",
                        width: "250px",
                    }}
                >
                    {bayaranNav.map((item) => (
                        <Box key={item.id}>
                            <Button fullWidth sx={styles.sidebar_link}>
                                {item.icon}
                                {item.name}
                            </Button>
                            <Divider sx={{ borderColor: "#D9D9D9" }} />
                        </Box>
                    ))}
                </Box>
                <Box component="main">{children}</Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default AuthenticatedLayout;
