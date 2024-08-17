import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ follow_articles }) => {
    return (
        <Component
            follow_articles={follow_articles}
        />
    )
}

export default Container;