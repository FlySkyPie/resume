import headUrl from './head.png';

export interface FlyPieIconProps {
    size?: number;
};


export const FlyPieIcon: React.FC<FlyPieIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={headUrl} />
};
