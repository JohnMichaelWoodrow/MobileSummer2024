import React, { createContext, useState } from 'react';
import players from '../assets/players.json';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [playerIndex, setPlayerIndex] = useState(0);

    return (
        <PlayerContext.Provider value={{ players, playerIndex, setPlayerIndex }}>
            {children}
        </PlayerContext.Provider>
    );
};
