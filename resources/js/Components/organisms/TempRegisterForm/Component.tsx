import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ComponentProps } from "./type";
import { cyan } from "@mui/material/colors";

const Component: React.FC<ComponentProps> = ({
    isSmSize,
    isMdSize,
    handleChange,
    submit,
    data,
    processing,
    errors
}) => {
    return (
        <Box textAlign={"center"}>
            <Typography variant="h4" marginBottom={10} marginTop={10}>
                新規会員登録
            </Typography>
            <form onSubmit={submit}>
                <Stack sx={{ alignItems: 'center' }}>
                    <TextField
                        label="ユーザー名(必須)"
                        value={data.name}
                        onChange={(e) => handleChange(e, "name")}
                        error={typeof(errors.name) != 'undefined' && errors.name.length !== 0}
                        helperText={errors.name}
                        variant="outlined"
                        sx={{
                            backgroundColor: "white",
                            width: (isSmSize ? "100%" : (isMdSize ? "70%" : "40%")),
                            marginBottom: 5
                        }}
                    />
                    <TextField
                    
                        label="メールアドレス(必須)"
                        value={data.email}
                        onChange={(e) => handleChange(e, "email")}
                        error={typeof(errors.email) != 'undefined' && errors.email.length !== 0}
                        helperText={errors.email}
                        variant="outlined"
                        sx={{
                            backgroundColor: "white",
                            width: (isSmSize ? "100%" : (isMdSize ? "70%" : "40%")),
                            marginBottom: 5
                        }}
                    />
                    <TextField
                        label="パスワード(必須)"
                        value={data.password}
                        onChange={(e) => handleChange(e, "password")}
                        error={typeof(errors.password) != 'undefined' && errors.password.length !== 0}
                        helperText={errors.password}
                        type="password"
                        variant="outlined"
                        sx={{
                            backgroundColor: "white",
                            width: (isSmSize ? "100%" : (isMdSize ? "70%" : "40%")),
                            marginBottom: 5
                        }}
                    />
                    <Button
                        variant="contained"
                        size="large"
                        disabled={processing}
                        type="submit"
                        sx={{
                            backgroundColor: cyan[400],
                            '&:hover': {
                                backgroundColor: cyan[600],
                            },
                            width: (isSmSize ? "100%" : (isMdSize ? "70%" : "40%")),
                        }}
                    >
                        登録
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default Component;