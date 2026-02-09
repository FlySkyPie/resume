import headUrl from './32x32/open_book_06.png';

export interface BookIconProps {
    size?: number;
};


export const BookIcon: React.FC<BookIconProps> = ({ size = 48 }) => {
    return <img
        width={size}
        height={size}
        src={headUrl} />
};
