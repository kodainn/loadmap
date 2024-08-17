<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\FollowUser;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Usecases\FollowUserArticle\IndexAction as FollowUserArticleIndexAction;
use Illuminate\Auth\AuthManager;

class FollowUserArticleController extends Controller
{
    public function index(
        AuthManager                  $auth,
        FollowUserArticleIndexAction $FollowUserArticleIndexAction,
        Article                      $article,
        FollowUser                   $followUser
    ): Response
    {
        $followArticles = $FollowUserArticleIndexAction($article, $followUser, $auth->guard()->id());
        return Inertia::render('FollowPage', [
            'follow_articles' => $followArticles
        ]);
    }
}
