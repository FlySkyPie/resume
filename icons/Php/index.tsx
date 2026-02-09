import iconUrl from './material-icon-theme--php-elephant.png';

export interface PhpIconProps {
    size?: number;
};


export const PhpIcon: React.FC<PhpIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
