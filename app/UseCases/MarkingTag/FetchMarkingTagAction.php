<?php

declare(strict_types=1);

namespace App\Usecases\MarkingTag;

use App\Models\User;

class FetchMarkingTagAction
{
    public function __invoke(
        User $userModel,
        int $userId
    ): array
    {
        $userHasMarkingTags = $userModel
            ->where('id', '=', $userId)
            ->with('tags')
            ->first();

        return $userHasMarkingTags->tags->toArray();
    }
}