import Header from "@/Components/organisms/Header/Header";
import Footer from "@/Components/organisms/Footer/Footer";
import { Box } from "@mui/material";
import { AdResponse } from "@/responseTypes/AdResponse";

const AdLayout: React.FC<AdResponse> = ({
    auth
}) => {
    return (
        <>
            <Header 
                auth={auth}
            />
            <Box sx={{ margin: 20}}>
            </Box>
        </>
    );
}

export default AdLayout;
