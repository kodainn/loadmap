import Tag from "./Tag";
import User from "./User";

type Article = {
    id:              number,
    title:           string,
    created_date_jp: string,
    user:            User,
    tags:            Tag[],
    like_count:      number
}

export default Article;