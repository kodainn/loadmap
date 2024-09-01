import TimelineLayout from "@/components/templates/TimelineLayout";
import { TimelineResponse } from "@/responseTypes/TimelineResponse";

const TimelinePage: React.FC<TimelineResponse> = ({
    auth,
    errors,
    flash,
    timeline_articles
}) => {
    return (
        <TimelineLayout
            auth={auth}
            errors={errors}
            flash={flash}
            timeline_articles={timeline_articles}
        />
    );
}

export default TimelinePage;
