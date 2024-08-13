import Component from "./Component"
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ marking_tags }) => {

    return (
        <Component
            marking_tags={marking_tags}
        />
    );
}

export default Container;