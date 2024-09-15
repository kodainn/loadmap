import Header from "@/Components/organisms/Header/Header";
import Footer from "@/Components/organisms/Footer/Footer";
import { Box } from "@mui/material";
import { TimelineResponse } from "@/responseTypes/TimelineResponse";
import TimelineArticleList from "@/Components/organisms/TimelineArticleList/TimelineArticleList";

const TimelineLayout: React.FC<TimelineResponse> = ({
    auth,
    timeline_articles
}) => {
    return (
        <>
            <Header auth={auth}/>
            <Box sx={{ margin: 20}}>
            </Box>
            <TimelineArticleList
                timeline_articles={timeline_articles}
            />
        </>
    );
}

export default TimelineLayout;
