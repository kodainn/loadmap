import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import { Box } from "@mui/material";
import { FollowResponse } from "@/responseTypes/FollowResponse";
import FollowArticleList from "@/components/organisms/FollowArticleList/FollowArticleList";

const FollowLayout: React.FC<FollowResponse> = ({
    follow_articles
}) => {
    return (
        <>
            <Header />
            <Box sx={{ margin: 20}}></Box>
            <FollowArticleList
                follow_articles={follow_articles}
            />
        </>
    );
}

export default FollowLayout;
