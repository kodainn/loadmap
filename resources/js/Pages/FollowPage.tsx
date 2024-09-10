import FollowLayout from "@/Components/templates/FollowLayout"
import { FollowResponse } from "@/responseTypes/FollowResponse";

const FollowPage: React.FC<FollowResponse> = ({
    auth,
    error,
    flash,
    follow_articles
}) => {
    return (
        <FollowLayout
            auth={auth}
            error={error}
            flash={flash}
            follow_articles={follow_articles}
        />
    );
}

export default FollowPage;