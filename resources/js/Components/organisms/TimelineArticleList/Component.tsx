import { Container, Stack } from "@mui/material";
import ArticleCard from "@/Components/molecules/ArticleCard/Container";
import { ComponentProps } from "./type";

const Component: React.FC<ComponentProps> = ({ timeline_articles }) => {
    return (
        <Container>
            <Stack spacing={2}>
                {timeline_articles.map(({ id, title, date_jp, like_count, tags, user }) => {
                        return (
                            <ArticleCard
                                id={id}
                                title={title}
                                date_jp={date_jp}
                                like_count={like_count}
                                tags={tags}
                                user={user}
                            />
                        );
                    })}
            </Stack>
        </Container>
    );
}

export default Component;
