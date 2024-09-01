import { Link } from "@inertiajs/react";
import { ComponentProps } from "./type";
import { Box, Button, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";



const Component: React.FC<ComponentProps> = ({ name, href, isSelected }) => {
    return (
        <Box sx={{borderBottom: (isSelected ? `3px solid ${cyan[500]}` : ""), padding: 2}}>
            <Link href={href} style={{textDecoration: "none", display: 'block' }}>
                <Typography sx={{color: "black", fontWeight: "bold"}}>
                    {name}
                </Typography>
            </Link>
        </Box>
    );
}

export default Component;