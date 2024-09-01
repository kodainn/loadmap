import HomeLayout from "@/components/templates/HomeLayout";
import { HomeResponse } from "@/responseTypes/HomeResponse";

const HomePage: React.FC<HomeResponse> = ({
    auth,
    errors,
    flash,
    marking_tags,
    ranking_articles,
    recommended_articles
}) => {
    return (
        <HomeLayout
            auth={auth}
            errors={errors}
            flash={flash}
            marking_tags={marking_tags}
            ranking_articles={ranking_articles}
            recommended_articles={recommended_articles}
        />
    );       
}

export default HomePage;