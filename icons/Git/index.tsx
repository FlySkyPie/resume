import iconUrl from './material-icon-theme--git.png';

export interface GitIconProps {
    size?: number;
};


export const GitIcon: React.FC<GitIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
