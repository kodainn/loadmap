import { Box, Typography } from "@mui/material";
import InertiaLinkButton from "@/Components/atoms/InertiaLinkButton/Container";

const Component: React.FC = () => {
    return (
        <Box
            sx={{ textAlign: 'center' }}
        >
            <Typography
                variant="h5"
                sx={{
                    marginBottom: 5
                }}
            >
                本登録が完了しました。
            </Typography>
            <InertiaLinkButton
                size="medium"
                href={route('home.index')}
                name="ホームページへ移動する"
            />
        </Box>
    );
}

export default Component;