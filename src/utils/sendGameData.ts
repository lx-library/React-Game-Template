// src/utils/sendGameData.ts
import { sendRequest } from '../hooks/SendReq';
import { GameData } from './formatGameData';

export const sendGameData = async (gameData: GameData) => {
    try {
        const response = await sendRequest({
            endpoint: '/save-game-details',
            method: 'POST',
            body: JSON.stringify(gameData),
        });
        console.log('Game data sent successfully:', response);
    } catch (error) {
        console.error('Failed to send game data:', error);
    }
};