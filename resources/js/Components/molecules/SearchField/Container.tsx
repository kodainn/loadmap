import Component from "./Component";
import { ContainerProps } from "./type";

const Container: React.FC<ContainerProps> = ({ onEnterKeyDraw }) => {
    return (
        <Component
            onEnterKeyDraw={onEnterKeyDraw}
        />
    );
}

export default Container;