import Component from "./Component";
import { AccountIconPopupButtonProps } from "./type";

const AccountIconPopupButton: React.FC<AccountIconPopupButtonProps> = ({ onClick, size }) => {
    return (
        <Component
            onClick={onClick}
            size={size}
        />
    )
}

export default AccountIconPopupButton;
