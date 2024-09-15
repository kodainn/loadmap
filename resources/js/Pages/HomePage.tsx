import HomeLayout from "@/Components/templates/HomeLayout";
import { HomeResponse } from "@/responseTypes/HomeResponse";

const HomePage: React.FC<HomeResponse> = ({
    auth,
    marking_tags,
    ranking_articles,
    recommended_articles
}) => {
    return (
        <HomeLayout
            auth={auth}
            marking_tags={marking_tags}
            ranking_articles={ranking_articles}
            recommended_articles={recommended_articles}
        />
    );       
}

export default HomePage;