import { styles } from "@/Components/Styles";
import {
    Box,
    Button,
    IconButton,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import tbs_logo from "@/Images/tbs_logo.png";
import { ArrowForward, Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";

const Register = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        phone_number: "",
        ic_number: "",
        password: "",
        showPassword: false,
        password_confirmation: "",
        showConfirm: false,
        email: "",
    });

    // Function for updating formData value
    const updatedFormData = (data) => {
        setFormData((prev) => {
            return {
                ...prev,
                ...data,
            };
        });
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <Box sx={styles.login_wrapper}>
            <Box sx={styles.login_container1}>
                <Box sx={{ margin: "40px" }}>
                    <Box
                        component="img"
                        src={tbs_logo}
                        sx={styles.login_tbs_logo}
                    />
                </Box>
            </Box>
            <Box sx={styles.login_container2}>
                <Box sx={styles.login_input_container}>
                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontWeight: "500",
                            color: "black",
                        }}
                    >
                        Daftar
                    </Typography>
                    <TextField
                        placeholder={"Nama Penuh (mengikut kad pengenalan)"}
                        type="text"
                        value={formData.name}
                        fullWidth
                        onChange={(e) =>
                            updatedFormData({ name: e.target.value })
                        }
                        slotProps={{
                            input: {
                                style: { fontSize: "14px" },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "10px",
                                padding: "5px",
                                "& fieldset": {
                                    borderColor: "#D9D9D9",
                                },
                            },
                        }}
                    />
                    <TextField
                        placeholder={"Nombor Telefon"}
                        type="text"
                        value={formData.phone_number}
                        fullWidth
                        onChange={(e) =>
                            updatedFormData({ phone_number: e.target.value })
                        }
                        slotProps={{
                            input: {
                                style: { fontSize: "14px" },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "10px",
                                padding: "5px",
                                "& fieldset": {
                                    borderColor: "#D9D9D9",
                                },
                            },
                        }}
                    />
                    <TextField
                        placeholder={"Nombor Kad Pengenalan"}
                        type="text"
                        value={formData.ic_number}
                        fullWidth
                        onChange={(e) =>
                            updatedFormData({ ic_number: e.target.value })
                        }
                        slotProps={{
                            input: {
                                style: { fontSize: "14px" },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "10px",
                                padding: "5px",
                                "& fieldset": {
                                    borderColor: "#D9D9D9",
                                },
                            },
                        }}
                    />
                    <TextField
                        placeholder={"E-mel"}
                        type="text"
                        value={formData.email}
                        fullWidth
                        onChange={(e) =>
                            updatedFormData({ email: e.target.value })
                        }
                        slotProps={{
                            input: {
                                style: { fontSize: "14px" },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "10px",
                                padding: "5px",
                                "& fieldset": {
                                    borderColor: "#D9D9D9",
                                },
                            },
                        }}
                    />
                    <TextField
                        placeholder="Kata Laluan"
                        fullWidth
                        type={formData.showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                            updatedFormData({ password: e.target.value })
                        }
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <IconButton
                                        onClick={() => {
                                            updatedFormData({
                                                showPassword:
                                                    !formData.showPassword,
                                            });
                                        }}
                                    >
                                        {formData.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                ),
                                style: { fontSize: "14px" },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "10px",
                                padding: "5px",
                                "& fieldset": {
                                    borderColor: "#D9D9D9",
                                },
                            },
                        }}
                    />
                    <TextField
                        placeholder="Sahkan Kata Laluan"
                        fullWidth
                        type={formData.showConfirm ? "text" : "password"}
                        value={formData.password_confirmation}
                        onChange={(e) =>
                            updatedFormData({
                                password_confirmation: e.target.value,
                            })
                        }
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <IconButton
                                        onClick={() => {
                                            updatedFormData({
                                                showConfirm:
                                                    !formData.showConfirm,
                                            });
                                        }}
                                    >
                                        {formData.showConfirm ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                ),
                                style: { fontSize: "14px" },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "10px",
                                padding: "5px",
                                "& fieldset": {
                                    borderColor: "#D9D9D9",
                                },
                            },
                        }}
                    />
                    <Button sx={[styles.login_button, { marginTop: "10px" }]}>
                        <Typography
                            sx={{
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            DAFTAR
                        </Typography>
                        <Box
                            sx={{
                                position: "absolute",
                                right: 20,
                                backgroundColor: "#006330",
                                borderRadius: "30px",
                                height: "30px",
                                width: "30px",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <ArrowForward sx={{ color: "white" }} />
                        </Box>
                    </Button>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "black",
                            fontSize: "14px",
                        }}
                    >
                        Sudah mempunyai akaun?{" "}
                        <Link
                            sx={{
                                textDecorationColor: "#007C3D",
                                color: "#007C3D",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                            href={route("login")}
                        >
                            Log masuk
                        </Link>{" "}
                        sekarang
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;
