import iconUrl from './next_js_logo_icon_145038.png';

export interface NextJsIconProps {
    size?: number;
};


export const NextJsIcon: React.FC<NextJsIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={iconUrl} />
};
