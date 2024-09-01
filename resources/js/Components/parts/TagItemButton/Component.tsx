import { ListItemButton, ListItemText } from "@mui/material";
import { ComponentProps } from "./type";
import TagIcon from '@mui/icons-material/Tag';

const Component: React.FC<ComponentProps> = ({ id, name }) => {
    return (
        <ListItemButton>
            <ListItemText
                key={id}
                primary={'#' + name}
            />
        </ListItemButton>
    )
}

export default Component;