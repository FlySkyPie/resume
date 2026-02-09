import iconUrl from './material-icon-theme--terraform.png';

export interface TerraformIconProps {
    size?: number;
};


export const TerraformIcon: React.FC<TerraformIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
