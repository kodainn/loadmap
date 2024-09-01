import Component from "./Component";
import { RankingArticleListProps } from "./type";

const RankingArticleList: React.FC<RankingArticleListProps> = ({ ranking_articles }) => {
    return (
        <Component
            ranking_articles={ranking_articles}
        />
    )
}

export default RankingArticleList;
