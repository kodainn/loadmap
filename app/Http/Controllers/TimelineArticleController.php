<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Article;
use Inertia\Inertia;
use App\Usecases\TimelineArticle\IndexAction as TimelineArticleIndexAction;

class TimelineArticleController extends Controller
{
    public function index(
        TimelineArticleIndexAction $timelineArticleIndexAction,
        Article $article
    )
    {
        $timelineArticles = $timelineArticleIndexAction($article);
        return Inertia::render('TimelinePage', [
            'timeline_articles' => $timelineArticles
        ]);
    }
}
