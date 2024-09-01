import Auth from "@/commonTypes/Auth";
import Error from "@/commonTypes/Error";
import Flash from "@/commonTypes/Flash";
import Article from "@/commonTypes/Article";

type FollowArticles = Article[];

export type FollowResponse = {
    auth:            Auth,
    error:           Error,
    flash:           Flash,
    follow_articles: FollowArticles
};