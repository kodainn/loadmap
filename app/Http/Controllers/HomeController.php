<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\User;
use App\Usecases\MarkingTag\FetchMarkingTagAction;
use App\Usecases\RankingArticle\FetchRankingArticleAction;
use App\Usecases\RecommendedArticle\FetchRecommendedArticleAction;
use Illuminate\Auth\AuthManager;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(
        AuthManager                   $auth,
        FetchMarkingTagAction         $fetchMarkingTagAction,
        FetchRecommendedArticleAction $fetchRecommendedArticleAction,
        FetchRankingArticleAction     $fetchRankingArticleAction,
        User                          $user,
        Article                       $article
    )
    {
        $markingTags = $fetchMarkingTagAction($user, $auth->guard()->id());
        $recommendedArticles = $fetchRecommendedArticleAction($user, $auth->guard()->id());
        $rankingArticles = $fetchRankingArticleAction($article);

        return Inertia::render('HomePage', [
            'marking_tags'         => $markingTags,
            'recommended_articles' => $recommendedArticles,
            'ranking_articles'     => $rankingArticles
        ]);
    }
}
