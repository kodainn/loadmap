import { Container, Stack, Typography } from "@mui/material";
import { ComponentProps } from "./type";
import ArticleCard from "@/Components/parts/ArticleCard/Container";

const Component: React.FC<ComponentProps> = ({ ranking_articles }) => {
    return (
        <Container>
            <Typography>
                記事ランキング
            </Typography>
            <Stack spacing={2}>
                {ranking_articles.map(({ id, title, date_jp, like_count, tags, user }) => {
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
