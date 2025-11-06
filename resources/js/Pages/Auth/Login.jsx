import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    IconButton,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { styles } from "@/Components/Styles";
import tbs_logo from "@/Images/tbs_logo.png";
import google_login from "@/Images/google_login.png";
import apple_login from "@/Images/apple_login.png";
import { ArrowForward, Visibility, VisibilityOff } from "@mui/icons-material";

const Login = ({ status, canResetPassword }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        showPassword: "",
        remember: false,
    });
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    // Function for updating formData value
    const updatedFormData = (data) => {
        setFormData((prev) => {
            return {
                ...prev,
                ...data,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            await axios.post(route("login"), {
                email: formData.email,
                password: formData.password,
                remember: formData.remember,
            });
            // Inertia automatically handles redirects after login
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error(error);
            }
        } finally {
            setProcessing(false);
        }
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
                        Log masuk
                    </Typography>
                    <Box sx={{ display: "grid", gap: "20px" }}>
                        <Button
                            sx={styles.login_with_button}
                            variant="outlined"
                        >
                            <Box
                                component="img"
                                src={google_login}
                                sx={{ height: "25px" }}
                            />
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: "black",
                                }}
                            >
                                Log masuk dengan Google
                            </Typography>
                        </Button>
                        <Button
                            sx={styles.login_with_button}
                            variant="outlined"
                        >
                            <Box
                                component="img"
                                src={apple_login}
                                sx={{ height: "25px" }}
                            />
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: "black",
                                }}
                            >
                                Log masuk dengan Apple
                            </Typography>
                        </Button>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#9D9898",
                        }}
                    >
                        ATAU
                    </Typography>
                    <TextField
                        placeholder={"Nombor Kad Pengenalan"}
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
                    <Link
                        sx={{
                            textAlign: "right",
                            textDecorationColor: "black",
                            color: "black",
                            fontSize: "14px",
                        }}
                        href=""
                    >
                        Lupa Kata Laluan?
                    </Link>
                    <Button sx={styles.login_button}>
                        <Typography
                            sx={{
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            LOG MASUK
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
                        Tiada Akaun?{" "}
                        <Link
                            sx={{
                                textDecorationColor: "#007C3D",
                                color: "#007C3D",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                            href={route("register")}
                        >
                            Daftar
                        </Link>{" "}
                        sekarang
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;

// return (
//     // <GuestLayout>
//         // <Head title="Log in" />

//         // {status && (
//         //     <div className="mb-4 text-sm font-medium text-green-600">
//         //         {status}
//         //     </div>
//         // )}

//         // <form onSubmit={handleSubmit}>
//         //     {/* Email */}
//         //     <div>
//         //         <InputLabel htmlFor="email" value="Email" />
//         //         <TextInput
//         //             id="email"
//         //             type="email"
//         //             name="email"
//         //             value={email}
//         //             className="mt-1 block w-full"
//         //             autoComplete="username"
//         //             isFocused={true}
//         //             onChange={(e) => setEmail(e.target.value)}
//         //         />
//         //         <InputError message={errors.email} className="mt-2" />
//         //     </div>

//         //     {/* Password */}
//         //     <div className="mt-4">
//         //         <InputLabel htmlFor="password" value="Password" />
//         //         <TextInput
//         //             id="password"
//         //             type="password"
//         //             name="password"
//         //             value={password}
//         //             className="mt-1 block w-full"
//         //             autoComplete="current-password"
//         //             onChange={(e) => setPassword(e.target.value)}
//         //         />
//         //         <InputError message={errors.password} className="mt-2" />
//         //     </div>

//         //     {/* Remember Me */}
//         //     <div className="mt-4 block">
//         //         <label className="flex items-center">
//         //             <Checkbox
//         //                 name="remember"
//         //                 checked={remember}
//         //                 onChange={(e) => setRemember(e.target.checked)}
//         //             />
//         //             <span className="ms-2 text-sm text-gray-600">
//         //                 Remember me
//         //             </span>
//         //         </label>
//         //     </div>

//         //     {/* Submit + Forgot Password */}
//         //     <div className="mt-4 flex items-center justify-end">
//         //         {canResetPassword && (
//         //             <Link
//         //                 href={route("password.request")}
//         //                 className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//         //             >
//         //                 Forgot your password?
//         //             </Link>
//         //         )}
//         //         <PrimaryButton className="ms-4" disabled={processing}>
//         //             {processing ? "Logging in..." : "Log in"}
//         //         </PrimaryButton>
//         //     </div>
//         // </form>
//     // </GuestLayout>
// );
