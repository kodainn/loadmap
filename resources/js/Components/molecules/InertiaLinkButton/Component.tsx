import { Link } from "@inertiajs/react"
import { Button } from "@mui/material"
import { ComponentProps } from "./type"
import { cyan } from "@mui/material/colors"

const Component: React.FC<ComponentProps> = ({ size, href, name }) => {
    return (
        <Link
            href={href}
            style={{ textDecoration: 'none', color: 'white' }}
        >
            <Button
                variant="contained"
                size={size}
                sx={{
                    backgroundColor: cyan[400],
                    '&:hover': {
                    backgroundColor: cyan[600],
                    },
                }}
            >{name}</Button>
            
        </Link>
    );
}

export default Component;