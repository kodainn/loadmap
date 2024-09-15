import TimelineLayout from "@/Components/templates/TimelineLayout";
import { TimelineResponse } from "@/responseTypes/TimelineResponse";

const TimelinePage: React.FC<TimelineResponse> = ({
    auth,
    timeline_articles
}) => {
    return (
        <TimelineLayout
            auth={auth}
            timeline_articles={timeline_articles}
        />
    );
}

export default TimelinePage;
