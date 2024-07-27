import { Link } from "@inertiajs/react";
import SearchIcon from '@mui/icons-material/Search';
import { ComponentProps } from "./type";



const Component: React.FC<ComponentProps> = ({ size }) => {
    return (
        <Link href={route("search")} style={{textDecoration: "none", display: 'block', color: "black" }}>
            <SearchIcon fontSize={size} />
        </Link>
    );
}

export default Component;