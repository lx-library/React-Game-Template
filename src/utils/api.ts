// src/utils/api.ts
import { SLIDES_MICROSERVICE_URL } from '../config';
import type { GameConfig, ApiResponse } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.lxlibrary.com';

export const decryptGameSeed = async (seed: string): Promise<GameConfig> => {
    const token = localStorage.getItem('gameToken');
    const response = await fetch(`${SLIDES_MICROSERVICE_URL}/decrypt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ encrypted: seed }),
    });

    if (!response.ok) {
        throw new Error('Failed to decrypt game seed');
    }

    const data: ApiResponse = await response.json();
    return data.data;
};

export const submitGameResults = async (results: {
    score: number;
    question: string;
    answer: string;
}) => {
    const token = localStorage.getItem('gameToken');
    const response = await fetch(`${API_BASE_URL}/submit-results`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(results),
    });

    if (!response.ok) {
        throw new Error('Failed to submit game results');
    }

    return response.json();
};