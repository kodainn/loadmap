import Auth from "@/commonTypes/Auth";
import Tag from "@/commonTypes/Tag";
import Article from "@/commonTypes/Article";

type MarkingTags = Tag[];

type RankingArticles = Article[];

type RecommendedArticle = {
    id:       number,
    name:     string,
    articles: Article[]
}

export type HomeResponse = {
    auth:                 Auth,
    marking_tags:         MarkingTags,
    ranking_articles:     RankingArticles,
    recommended_articles: RecommendedArticle[]
};