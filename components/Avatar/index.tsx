import { useMemo } from 'react';

import { Character } from '../../constants/character';
import { Link } from '../Link';

import flypieUrl from './flypie.webp';
import weiUrl from './wei.jpg';

export interface AvatarProps {
    mode: Character;
};

export const Avatar: React.FC<AvatarProps> = ({ mode }) => {
    const imageView = useMemo(() =>
        <img
            style={{ width: '100%' }}
            src={mode === Character.Wei ?
                weiUrl :
                flypieUrl} />, [mode]);

    return (
        <Link
            style={{ width: '100%' }}
            href={"/"}>
            {imageView}
        </Link>
    );
};
