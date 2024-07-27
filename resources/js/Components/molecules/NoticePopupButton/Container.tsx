import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ onClick, size }) => {
    return (
        <Component
            onClick={onClick}
            size={size}
        />
    );
}

export default Container;