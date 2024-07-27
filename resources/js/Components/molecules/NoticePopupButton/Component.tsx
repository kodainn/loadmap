import NotificationsIcon from '@mui/icons-material/Notifications';
import { ComponentProps } from './type';


const Component: React.FC<ComponentProps> = ({ onClick, size }) => {
    return (
        <div onClick={onClick}>
            <NotificationsIcon fontSize={size} />
        </div>
    );
}

export default Component;