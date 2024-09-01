import { Card, Grid, List, ListSubheader, Stack, Typography } from "@mui/material";
import { ComponentProps } from "./type";
import TagItemButton from "@/Components/molecules/TagItemButton/Container";


const Component: React.FC<ComponentProps> = ({ marking_tags }) => {
    return (
        <List
            sx={{ backgroundColor: "white" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    マーキング中のタグ
                </ListSubheader>
            }
        >
            <Stack spacing={2}>
                {marking_tags.map(({ id, name }) => {
                    return (
                        <TagItemButton
                            key={id}
                            id={id}
                            name={name}
                        />
                    )
                })}
            </Stack>
        </List>
    )
}

export default Component;
