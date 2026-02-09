import { RpgBox } from "@flyskypie/react-rpgui/rpg-box";
import '@flyskypie/react-rpgui/css/box';

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-small one-third">
            <RpgBox>
                {children}
            </RpgBox>
        </div>
    );
};
