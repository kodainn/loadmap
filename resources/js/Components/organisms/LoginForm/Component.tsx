import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ComponentProps } from "./type";
import { cyan } from "@mui/material/colors";
import Alert from '@mui/material/Alert';

const Component: React.FC<ComponentProps> = ({
    isSmSize,
    isMdSize,
    handleChange,
    submit,
    data,
    processing,
    errors,
    flash
}) => {

    return (
        <Box textAlign={"center"}>
            <Typography variant="h4" marginBottom={10} marginTop={10}>
                ログイン
            </Typography>
            <form onSubmit={submit}>
                <Stack sx={{ alignItems: 'center' }}>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            width: (isSmSize ? "100%" : (isMdSize ? "70%" : "40%")),
                            marginBottom: 5
                        }}
                    >
                        { flash.errorMessage && <Alert severity="error">{flash.errorMessage}</Alert> }
                    </Box>
                    <TextField
                        label="ユーザー名"
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
                        label="パスワード"
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
                        ログイン
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default Component;