import { auth, article, errors, flash } from "./CommonResponse";

type timelineArticles = article[];

export type TimelineResponse = {
    auth:              auth,
    errors:            errors,
    flash:             flash,
    timeline_articles: timelineArticles
};
