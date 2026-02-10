import iconUrl from './material-icon-theme--laravel.png';

export interface LaravelIconProps {
    size?: number;
};


export const LaravelIcon: React.FC<LaravelIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
