import Component from "./Component";
import { RecommendedArticleListProps } from "./type";

const RecommendedArticleList: React.FC<RecommendedArticleListProps> = ({ recommended_articles }) => {
    return (
        <Component
            recommended_articles={recommended_articles}
        />
    )
}

export default RecommendedArticleList;
