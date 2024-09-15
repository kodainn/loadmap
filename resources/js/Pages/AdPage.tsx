import AdLayout from "@/Components/templates/AdLayout"
import { AdResponse } from "@/responseTypes/AdResponse";

const AdPage: React.FC<AdResponse> = ({
    auth
}) => {
    return (
        <AdLayout
            auth={auth}
        />
    );
}

export default AdPage;