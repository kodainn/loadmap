import Component from "./Component";
import { ArticleCardProps } from "./type";

const ArticleCard: React.FC<ArticleCardProps> = ({
    id,
    title,
    date_jp,
    like_count,
    tags,
    user
}) => {

    return (
        <Component
            id={id}
            title={title}
            date_jp={date_jp}
            like_count={like_count}
            tags={tags}
            user={user}
        />
    );
}

export default ArticleCard;
