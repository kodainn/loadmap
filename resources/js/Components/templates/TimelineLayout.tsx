import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import { Box } from "@mui/material";
import { TimelineResponse } from "@/responseTypes/TimelineResponse";
import TimelineArticleList from "@/components/organisms/TimelineArticleList/TimelineArticleList";

const TimelineLayout: React.FC<TimelineResponse> = ({
    auth,
    errors,
    flash,
    timeline_articles
}) => {
    return (
        <>
            <Header />
            <Box sx={{ margin: 20}}>
            </Box>
            <TimelineArticleList
                timeline_articles={timeline_articles}
            />
        </>
    );
}

export default TimelineLayout;
