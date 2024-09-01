
import Component from "./Component"
import { TagItemButtonProps } from "./type"

const TagItemButton: React.FC<TagItemButtonProps> = ({ id, name }) => {
    return (
        <Component
            id={id}
            name={name}
        />
    );
}

export default TagItemButton;
