import { auth, article, errors, flash } from "./CommonResponse";

type followArticles = article[];

export type FollowResponse = {
    auth:            auth,
    errors:          errors,
    flash:           flash,
    follow_articles: followArticles
};