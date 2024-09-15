import Auth from "@/commonTypes/Auth";
import Article from "@/commonTypes/Article";

type TimelineArticles = Article[];

export type TimelineResponse = {
    auth:              Auth,
    timeline_articles: TimelineArticles
};
