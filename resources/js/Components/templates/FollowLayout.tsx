import Header from "@/Components/organisms/Header/Header";
import Footer from "@/Components/organisms/Footer/Footer";
import { Box } from "@mui/material";
import { FollowResponse } from "@/responseTypes/FollowResponse";
import FollowArticleList from "@/Components/organisms/FollowArticleList/FollowArticleList";

const FollowLayout: React.FC<FollowResponse> = ({
    auth,
    follow_articles
}) => {
    return (
        <>
            <Header auth={auth}/>
            <Box sx={{ margin: 20}}></Box>
            <FollowArticleList
                follow_articles={follow_articles}
            />
        </>
    );
}

export default FollowLayout;
