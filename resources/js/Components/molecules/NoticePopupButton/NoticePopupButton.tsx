import Component from "./Component";
import { NoticePopupButtonProps } from "./type";

const NoticePopupButton: React.FC<NoticePopupButtonProps> = ({ onClick, size }) => {
    return (
        <Component
            onClick={onClick}
            size={size}
        />
    );
}

export default NoticePopupButton;
