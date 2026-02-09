import iconUrl from './logos--python.png';

export interface PythonIconProps {
    size?: number;
};


export const PythonIcon: React.FC<PythonIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
