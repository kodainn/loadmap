<?php

declare(strict_types=1);

namespace App\Usecases\TimelineArticle;

use App\Models\Article;
use Illuminate\Support\Facades\DB;

class FetchTimelineArticleAction
{
    public function __invoke(
        Article $articleModel
    )
    {
        return $articleModel
            ->select(DB::raw("
                articles.id,
                title,
                articles.creating_user_id,
                DATE_FORMAT(articles.created_at, '%Y年%m月%d日') as date_jp,
                count(article_likes.article_id) as like_count"))
            ->join('article_likes', 'articles.id', '=', 'article_likes.article_id')
            ->groupByRaw("
                articles.id,
                title,
                creating_user_id,
                date_jp")
            ->orderBy('articles.created_at', 'desc')
            ->with(['user', 'tags'])
            ->offset(0)
            ->limit(10)
            ->get();
    }
}
