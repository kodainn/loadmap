import Header from "@/Components/organisms/Header/Container";
import Footer from "@/Components/organisms/Footer/Container";
import { Box } from "@mui/material";
import { TimelineResponse } from "@/interfaces/TimelineResponse";
import TimelineArticleList from "@/Components/organisms/TimelineArticleList/Container";

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
