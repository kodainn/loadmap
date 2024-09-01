
import Component from "./Component"
import { ContainerProps } from "./type"

const Container: React.FC<ContainerProps> = ({ id, name }) => {
    return (
        <Component
            id={id}
            name={name}
        />
    );
}

export default Container;