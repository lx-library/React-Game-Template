// src/types/index.ts
export interface GameState {
    score: number;
    isGameOver: boolean;
    currentQuestion?: string;
    userAnswer?: string;
}

// src/types/index.ts
export interface GameConfig {
    gameType: string;
    difficulty: string;
    timeLimit?: number;
    images?: ImageAsset[];
    currentQuestion?: string; // Add this line
}
export interface ImageAsset {
    id: string;
    url: string;
    label: string;
}

export interface ApiResponse {
    success: boolean;
    data: GameConfig;
}