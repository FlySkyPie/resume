import { Character } from '../../constants/character';

import flypieUrl from './flypie.webp';
import weiUrl from './wei.jpg';

export interface AvatarProps {
    mode: Character;
};

export const Avatar: React.FC<AvatarProps> = ({ mode }) => {

    return <img
        style={{ width: '100%' }}
        src={mode === Character.Wei ? weiUrl : flypieUrl} />
};
