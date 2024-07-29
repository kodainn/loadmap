import TempRegisterComplate from "@/Components/organisms/TempRegisterComplate/Container";
import { Box } from "@mui/material";

const TempRegisterComplateLayout: React.FC = () => {
    return (
        <Box
            sx={{
                marginTop: 20
            }}
        >
            <TempRegisterComplate />
        </Box>
    );
}

export default TempRegisterComplateLayout;