import Component from "./Component";
import { ArticleCardProps } from "./type";

const ArticleCard: React.FC<ArticleCardProps> = ({
    id,
    title,
    created_date_jp,
    likes_count,
    tags,
    user
}) => {

    return (
        <Component
            id={id}
            title={title}
            created_date_jp={created_date_jp}
            likes_count={likes_count}
            tags={tags}
            user={user}
        />
    );
}

export default ArticleCard;
