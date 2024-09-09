import TimelineLayout from "@/components/templates/TimelineLayout";
import { TimelineResponse } from "@/responseTypes/TimelineResponse";

const TimelinePage: React.FC<TimelineResponse> = ({
    auth,
    error,
    flash,
    timeline_articles
}) => {
    return (
        <TimelineLayout
            auth={auth}
            error={error}
            flash={flash}
            timeline_articles={timeline_articles}
        />
    );
}

export default TimelinePage;
