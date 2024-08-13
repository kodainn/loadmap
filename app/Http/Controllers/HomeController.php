<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\User;
use App\Usecases\MarkingTag\IndexAction as MarkingTagIndexAction;
use App\Usecases\RecommendedArticle\IndexAction as RecommendedArticleIndexAction;
use App\Usecases\RankingArticle\IndexAction as RankingArticleIndexAction;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(
        MarkingTagIndexAction $markingTagIndexAction,
        RecommendedArticleIndexAction $recommendedArticleIndexAction,
        RankingArticleIndexAction $rankingArticleIndexAction,
        User $user,
        Article $article
    )
    {
        $authUser = Auth::user();
        $markingTags = $markingTagIndexAction($user, $authUser->id);
        $recommendedArticles = $recommendedArticleIndexAction($user, $authUser->id);
        $rankingArticles = $rankingArticleIndexAction($article);

        return Inertia::render('HomePage', [
            'marking_tags'         => $markingTags,
            'recommended_articles' => $recommendedArticles,
            'ranking_articles'     => $rankingArticles
        ]);
    }
}
