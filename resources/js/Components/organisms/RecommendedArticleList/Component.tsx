import ArticleCard from "@/Components/molecules/ArticleCard/Container";
import { ComponentProps } from "./type";
import { Stack, Typography } from "@mui/material";

const Component: React.FC<ComponentProps> = ({ recommended_articles }) => {
    return (
        <Stack spacing={2}>
            { recommended_articles.map(({ id, name, articles }) => {
                return (
                    <div key={id}>
                        <Typography>
                            #{name}のおすすめ記事
                        </Typography>
                        <Stack
                            sx={{
                                overflowX: 'auto',
                                whiteSpace: 'nowrap',
                                display: 'flex'
                            }}
                            direction='row'
                            spacing={2}
                        >
                            {articles.map(({ id, title, date_jp, like_count, tags, user }) => {
                                return (
                                    <ArticleCard
                                        key={id}
                                        id={id}
                                        title={title}
                                        date_jp={date_jp}
                                        like_count={like_count}
                                        tags={tags}
                                        user={user}
                                    />
                                )
                            })}
                        </Stack>
                    </div>
                );
            })}
        </Stack>
    )
}

export default Component;
