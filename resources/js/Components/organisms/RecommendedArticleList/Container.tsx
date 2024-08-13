import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ recommended_articles }) => {
    return (
        <Component
            recommended_articles={recommended_articles}
        />
    )
}

export default Container;