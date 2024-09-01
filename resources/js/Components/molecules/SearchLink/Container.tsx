import Component from "./Component";
import { ContainerProps } from "./type";


const Container: React.FC<ContainerProps> = ({ size }) => {
    return (
        <Component
            size={size}
        />
    );
}

export default Container;