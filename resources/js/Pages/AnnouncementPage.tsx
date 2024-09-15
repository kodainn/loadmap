import AnnouncementLayout from "@/Components/templates/AnnouncementLayout";
import { AnnouncementResponse } from "@/responseTypes/AnnouncementResponse";


const AnnouncementPage: React.FC<AnnouncementResponse> = ({
    auth
}) => {
    return (
        <>
            <AnnouncementLayout
                auth={auth}
            />
        </>
    );
}

export default AnnouncementPage;