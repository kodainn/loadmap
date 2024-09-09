<?php

declare(strict_types=1);

namespace App\Http\InertiaResponses;

use App\Http\Transforms\ArticleIndexTransform;
use Illuminate\Database\Eloquent\Collection;
use Inertia\Inertia;
use Inertia\Response;

class TimelineArticleResponse
{
    public function __invoke(
        string     $component,
        Collection $timelineArticles
    ): Response
    {
        return Inertia::render($component, [
            'timeline_articles' => ArticleIndexTransform::collectionToArray($timelineArticles)
        ]);
    }
}