import { Avatar, Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { ComponentProps } from "./type";
import StringProcessor from "@/utils/StringProcessor";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Component: React.FC<ComponentProps> = ({
    id,
    title,
    created_date_jp,
    like_count,
    tags,
    user
}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',

                    }}
                >
                    <Avatar sx={{ height: 30, width: 30 }} src={user.icon_path ? user.icon_path : "/img/default_icon.png"} />
                    <Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {user.name + " " + StringProcessor.getFullName(user.first_name, user.last_name)} 
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {created_date_jp}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography>
                    {title}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        marginBottom: 2
                    }}
                >
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Filled" />
                    {tags.map(({ id, name }) => {
                        return (
                            <Chip key={id} label={name} />     
                        );
                    })}
                </Box>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <FavoriteBorderIcon fontSize="small" />
                    {like_count}
                </Box>
            </CardContent>
        </Card>
    );
}

export default Component;