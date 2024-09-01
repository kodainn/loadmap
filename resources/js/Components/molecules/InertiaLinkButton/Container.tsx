import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ size, href, name }) => {
    return (
        <Component 
            size={size}
            href={href}
            name={name}
        />
    );
}

export default Container;