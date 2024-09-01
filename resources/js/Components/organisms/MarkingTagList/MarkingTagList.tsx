import Component from "./Component"
import { MarkingTagListProps } from "./type";

const MarkingTagList: React.FC<MarkingTagListProps> = ({ marking_tags }) => {

    return (
        <Component
            marking_tags={marking_tags}
        />
    );
}

export default MarkingTagList;
