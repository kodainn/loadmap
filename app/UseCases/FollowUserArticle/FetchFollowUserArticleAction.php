<?php

declare(strict_types=1);

namespace App\Usecases\FollowUserArticle;

use App\Models\Article;
use App\Models\FollowUser;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class FetchFollowUserArticleAction
{
    public function __invoke(
        Article    $articleModel,
        FollowUser $followUserModel,
        int        $userId
    ): Collection
    {
        $followIds = $followUserModel
            ->where('following_user_id', '=', $userId)
            ->get()
            ->pluck('followed_user_id')
            ->toArray();

        return $articleModel
            ->select(DB::raw("
                articles.id,
                title,
                creating_user_id,
                DATE_FORMAT(articles.created_at, '%Y年%m月%d日') as created_date_jp"))
            ->with(['user', 'tags'])
            ->withCount('likes')
            ->whereIn('creating_user_id', $followIds)
            ->get();
    }
}