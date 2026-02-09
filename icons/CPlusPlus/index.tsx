import iconUrl from './cpp_logo.png';

export interface CPlusPlusIconProps {
    size?: number;
};


export const CPlusPlusIcon: React.FC<CPlusPlusIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
