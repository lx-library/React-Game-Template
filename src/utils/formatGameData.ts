// src/utils/formatGameData.ts
import { GameConfig } from '../types';

interface Question {
    content: string;
    answer_expected: string;
    answer_given: string;
    pass: boolean;
    response_time: number;
}

interface GameData {
    seed: string;
    questions: Question[];
}

export const formatGameData = (config: GameConfig, sequence: string[], responseTimes: number[], value: number): GameData => {
    const questions: Question[] = sequence.slice(1).map((answer_given, index) => {
        const expected_answer = (index + 1) * value;
        const response_time = responseTimes[index + 1] - responseTimes[index];
        return {
            content: `What is ${index + 1} * ${value}?`,
            answer_expected: expected_answer.toString(),
            answer_given,
            pass: expected_answer.toString() === answer_given,
            response_time,
        };
    });

    return {
        seed: config.seed,
        questions,
    };
};