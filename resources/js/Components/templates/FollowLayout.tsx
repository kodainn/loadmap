import Header from "@/Components/organisms/Header/Container";
import Footer from "@/Components/organisms/Footer/Container";
import { Box } from "@mui/material";
import { FollowResponse } from "@/interfaces/FollowResponse";
import FollowArticleList from "@/Components/organisms/FollowArticleList/Container";

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