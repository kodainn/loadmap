import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ComponentProps } from './type';
import { Menu, MenuItem } from '@mui/material';


const Component: React.FC<ComponentProps> = ({
    size,
    anchorEl,
    isOpen,
    handleClick,
    handleClose
}) => {
    return (
        <>
            <div
                onClick={handleClick}
            >
                <AccountCircleIcon fontSize={size} />
            </div>
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>マイページ</MenuItem>
                <MenuItem onClick={handleClose}>設定</MenuItem>
            </Menu>
        </>
    );
}

export default Component;