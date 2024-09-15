<?php

declare(strict_types=1);

namespace App\Http\JsonResponses;

use Illuminate\Http\JsonResponse;

class ErrorResponse
{
    public function __invoke(
        string $message
    ): JsonResponse
    {
        return response()->json([
                'message' => $message
            ]);
    }
}