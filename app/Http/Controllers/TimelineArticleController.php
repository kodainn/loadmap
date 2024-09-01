<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Article;
use App\Usecases\TimelineArticle\FetchTimelineArticleAction;
use Inertia\Inertia;

class TimelineArticleController extends Controller
{
    public function index(
        FetchTimelineArticleAction $action,
        Article $article
    )
    {
        $timelineArticles = $action($article);
        return Inertia::render('TimelinePage', [
            'timeline_articles' => $timelineArticles
        ]);
    }
}
