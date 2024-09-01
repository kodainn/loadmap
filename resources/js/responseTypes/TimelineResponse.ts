import Auth from "@/commonTypes/Auth";
import Error from "@/commonTypes/Error";
import Flash from "@/commonTypes/Flash";
import Article from "@/commonTypes/Article";

type TimelineArticles = Article[];

export type TimelineResponse = {
    auth:              Auth,
    error:             Error,
    flash:             Flash,
    timeline_articles: TimelineArticles
};
