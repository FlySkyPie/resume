import iconUrl from './material-icon-theme--html.png';

export interface HtmlIconProps {
    size?: number;
};


export const HtmlIcon: React.FC<HtmlIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
