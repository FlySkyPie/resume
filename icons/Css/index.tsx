import iconUrl from './devicon--css.png';

export interface CssIconProps {
    size?: number;
};


export const CssIcon: React.FC<CssIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
