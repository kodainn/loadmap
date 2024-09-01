import { ContainerProps } from "./type";
import Component from "./Component";


const Container: React.FC<ContainerProps> = ({ name, href, isSelected = false }) => {
    return (
        <Component
            name={name}
            href={href}
            isSelected={isSelected}
        />
    );
}

export default Container;