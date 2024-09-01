import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({
    id,
    title,
    date_jp,
    like_count,
    tags,
    user
}) => {

    return (
        <Component
            id={id}
            title={title}
            date_jp={date_jp}
            like_count={like_count}
            tags={tags}
            user={user}
        />
    );
}

export default Container;