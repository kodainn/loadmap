import { useState } from "react";
import Component from "./Component";
import { AccountIconPopupButtonProps } from "./type";

const AccountIconPopupButton: React.FC<AccountIconPopupButtonProps> = ({ size }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
        setAnchorEl(null);
    };
    return (
        <Component
            size={size}
            anchorEl={anchorEl}
            isOpen={isOpen}
            handleClick={handleClick}
            handleClose={handleClose}
        />
    )
}

export default AccountIconPopupButton;
