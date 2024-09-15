import Auth from "@/commonTypes/Auth";
import Article from "@/commonTypes/Article";

type FollowArticles = Article[];

export type FollowResponse = {
    auth:            Auth,
    follow_articles: FollowArticles
};