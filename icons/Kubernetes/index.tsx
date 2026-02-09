import iconUrl from './devicon--kubernetes.png';

export interface KubernetesIconProps {
    size?: number;
};


export const KubernetesIcon: React.FC<KubernetesIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
