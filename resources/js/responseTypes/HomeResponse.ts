import Auth from "@/commonTypes/Auth";
import Error from "@/commonTypes/Error";
import Flash from "@/commonTypes/Flash";
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
    error:                Error,
    flash:                Flash,
    marking_tags:         MarkingTags,
    ranking_articles:     RankingArticles,
    recommended_articles: RecommendedArticle[]
};