type tag = {
    id:   number,
    name: string
}

type user = {
    id:         number,
    name:       string,
    icon_path:  string | null,
    first_name: string | null,
    last_name:  string | null
};

type article = {
    id:         number,
    title:      string,
    date_jp:    string,
    like_count: number,
    tags:       tag[],
    user:       user
}

export type ContainerProps = {
    follow_articles: article[]
}

export type ComponentProps = {
    follow_articles: article[]
}