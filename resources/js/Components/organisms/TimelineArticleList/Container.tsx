import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ timeline_articles }) => {
    return (
        <Component
            timeline_articles={timeline_articles}
        />
    )
}

export default Container;
