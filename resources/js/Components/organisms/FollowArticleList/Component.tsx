import { Container, Stack } from "@mui/material";
import ArticleCard from "@/components/molecules/ArticleCard/ArticleCard";
import { ComponentProps } from "./type";

const Component: React.FC<ComponentProps> = ({ follow_articles }) => {
    return (
        <Container>
            <Stack spacing={2}>
                {follow_articles.map(({ id, title, date_jp, like_count, tags, user }) => {
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
