import iconUrl from './material-icon-theme--javascript.png';

export interface JavascriptIconProps {
    size?: number;
};


export const JavascriptIcon: React.FC<JavascriptIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
