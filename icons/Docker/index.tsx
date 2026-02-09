import iconUrl from './material-icon-theme--docker.png';

export interface DockerIconProps {
    size?: number;
};


export const DockerIcon: React.FC<DockerIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
