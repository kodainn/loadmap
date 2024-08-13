import { auth, user, errors, flash } from "./CommonResponse";

type tag = {
    id:   number,
    name: string
}

type articles = {
    id:         number,
    title:      string,
    date_jp:    string,
    like_count: number,
    tags:       tag[],
    user:       user
}

type marking_tags = tag[];

type ranking_articles = articles[];

type recommended_article = {
    id:       number,
    name:     string,
    articles: articles[]
}

export type HomeResponse = {
    auth:                 auth,
    errors:               errors,
    flash:                flash,
    marking_tags:         marking_tags,
    ranking_articles:     ranking_articles,
    recommended_articles: recommended_article[]
};