import iconUrl from './material-icon-theme--typescript.png';

export interface TypescriptIconProps {
    size?: number;
};


export const TypescriptIcon: React.FC<TypescriptIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
