import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ ranking_articles }) => {
    return (
        <Component
            ranking_articles={ranking_articles}
        />
    )
}

export default Container;