import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Button,
    TextField,
    InputAdornment,
    iconButtonClasses,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import logo1 from "@/Images/logo1.png";
import { styles } from "@/Components/Styles";
import {
    Calculate,
    Home,
    KeyboardArrowDown,
    Notifications,
    Payment,
    PendingActions,
    Search,
    SupportAgent,
} from "@mui/icons-material";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showNav, setShowNav] = useState(false);
    const [nav, setNav] = useState([
        {
            id: 1,
            name: "Papan Pengguna",
            icon: <Home sx={{ fontSize: "30px" }} />,
            haveList: false,
        },
        {
            id: 2,
            name: "Bayaran",
            icon: <Payment sx={{ fontSize: "30px" }} />,
            haveList: true,
        },
        {
            id: 3,
            name: "Kalkulator Zakat",
            icon: <Calculate sx={{ fontSize: "30px" }} />,
            haveList: true,
        },
        {
            id: 4,
            name: "Bantuan",
            icon: <PendingActions sx={{ fontSize: "30px" }} />,
            haveList: true,
        },
        {
            id: 5,
            name: "Info",
            icon: <Notifications sx={{ fontSize: "30px" }} />,
            haveList: true,
        },
        {
            id: 6,
            name: "Hubungi Kami",
            icon: <SupportAgent sx={{ fontSize: "30px" }} />,
            haveList: false,
        },
    ]);

    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
            <AppBar position="static" color="default" elevation={1}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: { md: "10px 150px", xs: "10px 20px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "20px",
                        flexWrap: { xs: "wrap", md: "nowrap" },
                    }}
                >
                    <Box
                        sx={{
                            display: { md: "flex", xs: "none" },
                            alignItems: "center",
                            gap: "20px",
                            flexShrink: 0,
                        }}
                    >
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
                                fontSize: "22px",
                            }}
                        >
                            Tabung Baitulmal Sarawak
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            width: { md: "auto", xs: "100%" },
                            minWidth: "0px",
                        }}
                    >
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
                                        fontSize: "14px",
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
                                    fontSize: "14px",
                                },
                                "& .MuiInputBase-input::placeholder": {
                                    color: "#AAAAAA",
                                    opacity: 1, // ensures it’s not transparent
                                },
                            }}
                        />
                        <Button
                            sx={{
                                backgroundColor: "#007C3D",
                                color: "white",
                                textTransform: "none",
                                padding: "5px",
                                width: "150px",
                                borderRadius: "20px",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                                Log masuk
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Toolbar
                    sx={{
                        padding: { md: "10px 150px", xs: "10px 20px" },
                        backgroundColor: "#007C3D",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: { md: "flex", sm: "grid", xs: "none" },
                            gap: "20px",
                        }}
                    >
                        {nav.map((item) => (
                            <Button
                                key={item.id}
                                sx={{
                                    color: "white",
                                    textTransform: "none",
                                    fontWeight: 700,
                                    gap: "10px",
                                    fontSize: "16px",
                                }}
                                href={route("dashboard")}
                            >
                                {item.icon}
                                {item.name}
                                {item.haveList && <KeyboardArrowDown />}
                            </Button>
                        ))}
                    </Box>

                    <IconButton
                        edge="end"
                        color="inherit"
                        sx={{ display: { sm: "none" } }}
                        onClick={() => setShowNav((prev) => !prev)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {showNav && (
                <Box
                    sx={{
                        display: { sm: "none" },
                        backgroundColor: "#fff",
                        p: 2,
                    }}
                >
                    <Button fullWidth href={route("dashboard")}>
                        Dashboard
                    </Button>
                    <Button fullWidth href={route("logout")} color="error">
                        Log Out
                    </Button>
                </Box>
            )}

            {header && (
                <Box sx={{ backgroundColor: "#fff", boxShadow: 1, p: 3 }}>
                    {header}
                </Box>
            )}

            <Box component="main">{children}</Box>
        </Box>
    );
}
