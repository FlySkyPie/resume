import { createContext, useContext, useState } from "react";

import { Character } from "../constants/character";

interface CharacterContextValue {
    update: React.Dispatch<React.SetStateAction<Character>>;
    toggle: () => void;
    character: Character;
};

const CharacterContext = createContext<CharacterContextValue>({
    update() {
        throw new Error("Provider is missing.");
    },
    toggle() {
        throw new Error("Provider is missing.");
    },
    get character(): Character {
        throw new Error("Provider is missing.");
    },
});

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [character, update] = useState(Character.Wei);

    const toggle = () => update(prev => prev === Character.FlyPie ? Character.Wei : Character.FlyPie)

    return (
        <CharacterContext.Provider value={{ character, update, toggle }}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useCharacter = () => useContext(CharacterContext);
