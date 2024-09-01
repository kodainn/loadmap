import FollowLayout from "@/components/templates/FollowLayout"
import { FollowResponse } from "@/responseTypes/FollowResponse";

const FollowPage: React.FC<FollowResponse> = ({
    auth,
    errors,
    flash,
    follow_articles
}) => {
    return (
        <FollowLayout
            auth={auth}
            errors={errors}
            flash={flash}
            follow_articles={follow_articles}
        />
    );
}

export default FollowPage;