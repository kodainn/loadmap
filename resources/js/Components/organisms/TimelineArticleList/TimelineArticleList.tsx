import Component from "./Component";
import { TimelineArticleListProps } from "./type";

const TimelineArticleList: React.FC<TimelineArticleListProps> = ({ timeline_articles }) => {
    return (
        <Component
            timeline_articles={timeline_articles}
        />
    )
}

export default TimelineArticleList;
