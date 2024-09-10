import { Container, Stack, Typography } from "@mui/material";
import { ComponentProps } from "./type";
import ArticleCard from "@/Components/molecules/ArticleCard/ArticleCard";

const Component: React.FC<ComponentProps> = ({ ranking_articles }) => {
    return (
        <Container>
            <Typography>
                記事ランキング
            </Typography>
            <Stack spacing={2}>
                {ranking_articles.map(({ id, title, created_date_jp, likes_count, tags, user }) => {
                        return (
                            <ArticleCard
                                key={id}
                                id={id}
                                title={title}
                                created_date_jp={created_date_jp}
                                likes_count={likes_count}
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
