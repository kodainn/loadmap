import Header from "@/Components/organisms/Header/Header";
import Footer from "@/Components/organisms/Footer/Footer";
import { Box } from "@mui/material";
import { AnnouncementResponse } from "@/responseTypes/AnnouncementResponse";

const AnnouncementLayout: React.FC<AnnouncementResponse> = ({
    auth
}) => {
    return (
        <>
            <Header auth={auth}/>
            <Box sx={{ margin: 20}}>
            </Box>
        </>
    );
}

export default AnnouncementLayout;
