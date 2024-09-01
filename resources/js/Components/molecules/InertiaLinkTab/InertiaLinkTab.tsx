import { InertiaLinkTabProps } from "./type";
import Component from "./Component";


const InertiaLinkTab: React.FC<InertiaLinkTabProps> = ({ name, href, isSelected = false }) => {
    return (
        <Component
            name={name}
            href={href}
            isSelected={isSelected}
        />
    );
}

export default InertiaLinkTab;
