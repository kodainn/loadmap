import Article from "@/commonTypes/Article"

type RecommendedArticle = {
    id:       number,
    name:     string,
    articles: Article[]
}

export type RecommendedArticleListProps = {
    recommended_articles: RecommendedArticle[]
}

export type ComponentProps = {
    recommended_articles: RecommendedArticle[]
}