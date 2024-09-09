<?php

declare(strict_types=1);

namespace App\Usecases\RecommendedArticle;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class FetchRecommendedArticleAction
{
    public function __invoke(
        User $userModel,
        int $userId
    ): Collection
    {
        $user = $userModel
            ->where('id', '=', $userId)
            ->with(['tags' => function($query) {
                $query->with(['articles' => function($query) {
                    $query->select(DB::raw("
                            articles.id,
                            title,
                            creating_user_id,
                            DATE_FORMAT(articles.created_at, '%Y年%m月%d日') as created_date_jp,
                            count(article_likes.article_id) as like_count"))
                        ->join('article_likes', 'articles.id', '=', 'article_likes.article_id')
                        ->groupByRaw("
                            articles.id,
                            title,
                            created_date_jp,
                            creating_user_id,
                            article_tag.tag_id,
                            article_tag.article_id")
                        ->with(['user', 'tags'])
                        ->orderByRaw("
                            DATE_FORMAT(articles.created_at, '%Y-%m') DESC,
                            like_count DESC")
                        ->offset(0)
                        ->limit(5);
                }]);
            }])
            ->first();

        $recommendedArticlesByTag = [];
        foreach($user->tags as $tag) {
            if(!empty($tag->articles->toArray())) {
                $recommendedArticlesByTag[] = $tag;
            }
        }
        
        return new Collection($recommendedArticlesByTag);
    }
}