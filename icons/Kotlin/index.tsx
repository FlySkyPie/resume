import iconUrl from './logos--kotlin-icon.png';

export interface KotlinIconProps {
    size?: number;
};


export const KotlinIcon: React.FC<KotlinIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
