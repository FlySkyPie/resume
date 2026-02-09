import iconUrl from './material-icon-theme--react.png';

export interface ReactIconProps {
    size?: number;
};


export const ReactIcon: React.FC<ReactIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
