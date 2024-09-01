import Header from "@/Components/organisms/Header/Header";
import { HomeResponse } from "@/interfaces/HomeResponse";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MarkingTagList from "@/Components/organisms/MarkingTagList/MarkingTagList";
import RecommendedArticleList from "@/Components/organisms/RecommendedArticleList/RecommendedArticleList";
import RankingArticleList from "@/Components/organisms/RankingArticleList/RankingArticleList";

const HomeLayout: React.FC<HomeResponse> = ({
    marking_tags,
    ranking_articles,
    recommended_articles
}) => {
    console.log(recommended_articles);
    return (
        <>
            <Header />
            <Box sx={{ margin: 20}}></Box>
            <Grid container spacing={5}>
                <Grid xs={12} md={12} lg={2}>
                    <MarkingTagList
                        marking_tags={marking_tags}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={6}>
                    <RecommendedArticleList
                        recommended_articles={recommended_articles}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={4}>
                    <RankingArticleList
                        ranking_articles={ranking_articles}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default HomeLayout;
