import Component from "./Component";
import { FollowArticleListProps } from "./type";

const FollowArticleList: React.FC<FollowArticleListProps> = ({ follow_articles }) => {
    return (
        <Component
            follow_articles={follow_articles}
        />
    )
}

export default FollowArticleList;
