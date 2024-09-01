import Tag from "./Tag";
import User from "./User";

type Article = {
    id:         number,
    title:      string,
    date_jp:    string,
    like_count: number,
    tags:       Tag[],
    user:       User
}

export default Article;