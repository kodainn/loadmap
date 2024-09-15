import FollowLayout from "@/Components/templates/FollowLayout"
import { FollowResponse } from "@/responseTypes/FollowResponse";

const FollowPage: React.FC<FollowResponse> = ({
    auth,
    follow_articles
}) => {
    return (
        <FollowLayout
            auth={auth}
            follow_articles={follow_articles}
        />
    );
}

export default FollowPage;