<?php

declare(strict_types=1);

namespace App\Http\InertiaResponses;

use App\Http\Transforms\ArticleIndexTransform;
use Illuminate\Database\Eloquent\Collection;
use Inertia\Inertia;

class FollowUserArticleResponse
{
    public function __invoke(
        string $component,
        Collection $followArticles
    )
    {
        return Inertia::render($component, [
            'follow_articles' => ArticleIndexTransform::collectionToArray($followArticles)
        ]);
    }
}