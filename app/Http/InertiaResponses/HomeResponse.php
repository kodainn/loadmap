<?php

declare(strict_types=1);

namespace App\Http\InertiaResponses;

use App\Http\Transforms\ArticleIndexTransform;
use App\Http\Transforms\RecommendedArticleTransform;
use App\Http\Transforms\TagTransform;
use Illuminate\Database\Eloquent\Collection;
use Inertia\Inertia;
use Inertia\Response;

class HomeResponse
{
    public function __invoke(
        string     $component,
        Collection $markingTags,
        Collection $recommendedArticles,
        Collection $rankingArticles
    ): Response
    {
        return Inertia::render($component, [
            'marking_tags'         => TagTransform::collectionToArray($markingTags),
            'recommended_articles' => RecommendedArticleTransform::collectionToArray($recommendedArticles),
            'ranking_articles'     => ArticleIndexTransform::collectionToArray($rankingArticles)
        ]);
    }
}