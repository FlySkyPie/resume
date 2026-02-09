import iconUrl from './distributor-logo-linux.png';

export interface LinuxIconProps {
    size?: number;
};


export const LinuxIcon: React.FC<LinuxIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
