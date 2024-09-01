import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ComponentProps } from './type';


const Component: React.FC<ComponentProps> = ({ onClick, size }) => {
    return (
        <div onClick={onClick}>
            <AccountCircleIcon fontSize={size} />
        </div>
    );
}

export default Component;