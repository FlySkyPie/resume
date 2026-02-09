import iconUrl from './material-icon-theme--nodejs-alt.png';

export interface NodeIconProps {
    size?: number;
};


export const NodeIcon: React.FC<NodeIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
