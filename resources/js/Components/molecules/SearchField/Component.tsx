import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { ComponentProps } from "./type";

const OnEnterKeyDraw = (e: React.KeyboardEvent<HTMLDivElement>, OnEnterKeyDraw: () => void) => {
    if (e.key === 'Enter') {
        OnEnterKeyDraw();
    }
}

const Component: React.FC<ComponentProps> = ({ onEnterKeyDraw }) => {
    return (
        <TextField
            label="記事の検索する"
            id="outlined-start-adornment"
            sx={{
                m: 1,
                width: '25ch',
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        borderColor: 'black',
                    },
                },
                '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                        color: 'black',
                    },
                },
            }}
            size="small"
            InputProps={{
                startAdornment: <SearchIcon />,
            }}
            onKeyDown={(e) => OnEnterKeyDraw(e, onEnterKeyDraw)}
        />
    );
}

export default Component;