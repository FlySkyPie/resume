import iconUrl from './picon--cli.png';

export interface ShellIconProps {
    size?: number;
};


export const ShellIcon: React.FC<ShellIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
