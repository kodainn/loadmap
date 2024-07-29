import { Box, Typography } from "@mui/material";

const Component: React.FC = () => {
    return (
        <Box textAlign={"center"}>
            <Typography
                variant="h5"
            >
                仮登録を受け付けました。メールを確認し本登録を完了させてください。
            </Typography>
        </Box>
    );
}

export default Component;