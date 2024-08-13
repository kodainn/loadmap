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

type recommended_article = {
    id:       number,
    name:     string,
    articles: article[]
}

export type ContainerProps = {
    recommended_articles: recommended_article[]
}

export type ComponentProps = {
    recommended_articles: recommended_article[]
}