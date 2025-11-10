import { Box, Typography, Button } from "@mui/material";
import React from "react";
import download_apple_store from "@/Images/download_apple_store.png";
import download_google_play from "@/Images/download_google_play.png";
import { styles } from "@/Components/Styles";

const Footer = () => {
    return (
        <Box>
            <Box sx={styles.footer_container}>
                <Box
                    sx={{
                        display: { md: "flex", xs: "grid" },
                        gap: "30px",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                            Menu
                        </Typography>
                        <Box
                            sx={{
                                display: { md: "flex", xs: "grid" },
                                gap: { md: "40px", xs: "10px" },
                            }}
                        >
                            <Box sx={{ display: "grid", gap: "10px" }}>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Papan Pengguna
                                </Typography>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Bayaran
                                </Typography>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Kalkulator Zakat
                                </Typography>
                            </Box>
                            <Box sx={{ display: "grid", gap: "10px" }}>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Bantuan
                                </Typography>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Info
                                </Typography>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Hubungi Kami
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                            Maklumat untuk dihubungi
                        </Typography>
                        <Box sx={{ display: "flex", gap: "5px" }}>
                            <Typography
                                sx={{ fontWeight: 700, fontSize: "14px" }}
                            >
                                Pejabat:
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                TBS Kuching (HQ)
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "5px" }}>
                            <Typography
                                sx={{ fontWeight: 700, fontSize: "14px" }}
                            >
                                E-mel:
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                abc123@abc.com
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "5px" }}>
                            <Typography
                                sx={{ fontWeight: 700, fontSize: "14px" }}
                            >
                                Nombor Telefon:
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                012-3456789
                            </Typography>
                        </Box>
                        <Box sx={{ display: "grid", gap: "5px" }}>
                            <Typography
                                sx={{ fontWeight: 700, fontSize: "14px" }}
                            >
                                Alamat:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {
                                    "Tbs Square, Blok A, Lot 3655,\n Jalan Batu Kawa, 93250\n Kuching, Sarawak, Malaysia"
                                }
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                            Pautan undang-undang
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gap: "10px",
                            }}
                        >
                            <Typography sx={{ fontSize: "14px" }}>
                                Dasar Privasi
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                Terma Perkhidmatan
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                            Muat turun Applikasi Pelanggan TBS
                        </Typography>
                        <Box
                            sx={{
                                display: { md: "flex", xs: "grid" },
                                gap: "10px",
                            }}
                        >
                            <Button
                                sx={{
                                    width: "120px",
                                    padding: 0,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={download_google_play}
                                    sx={{
                                        height: "40px",
                                    }}
                                />
                            </Button>
                            <Button
                                sx={{
                                    width: "120px",
                                    padding: 0,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={download_apple_store}
                                    sx={{
                                        height: "40px",
                                    }}
                                />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#006330",
                    padding: { md: "15px 150px", xs: "15px 20px" },
                    color: "white",
                }}
            >
                <Typography sx={{ fontSize: "14px" }}>
                    Copyright 2025. Tabung Baitulmal Sarawak. All Rights
                    Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
