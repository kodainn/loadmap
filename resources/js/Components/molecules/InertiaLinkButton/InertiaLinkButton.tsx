import Component from "./Component";
import { InertiaLinkButtonProps } from "./type";

const InertiaLinkButton: React.FC<InertiaLinkButtonProps> = ({ size, href, name }) => {
    return (
        <Component
            size={size}
            href={href}
            name={name}
        />
    );
}

export default InertiaLinkButton;
