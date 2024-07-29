import { Box } from "@mui/material";
import RegisterComplate from "@/Components/organisms/RegisterComplate/Container";

const RegisterComplateLayout: React.FC = () => {
    return (
        <Box
            sx={{
                marginTop: 20
            }}
        >
            <RegisterComplate />
        </Box>
    );
}

export default RegisterComplateLayout;