import { auth, tag, article, errors, flash } from "./CommonResponse";

type markingTags = tag[];

type rankingArticles = article[];

type recommendedArticle = {
    id:       number,
    name:     string,
    articles: article[]
}

export type HomeResponse = {
    auth:                 auth,
    errors:               errors,
    flash:                flash,
    marking_tags:         markingTags,
    ranking_articles:     rankingArticles,
    recommended_articles: recommendedArticle[]
};