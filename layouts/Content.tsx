import { RpgBox } from "@flyskypie/react-rpgui/rpg-box";
import '@flyskypie/react-rpgui/css/box';

export function Content({ children }: { children: React.ReactNode }) {
    return (
        <RpgBox className="flex-small content">
            {children}

        </RpgBox>
    );
};
