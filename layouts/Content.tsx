import { RpgBox } from "@flyskypie/react-rpgui/rpg-box";


export function Content({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-small content">
            <RpgBox>
                {children}
            </RpgBox>
        </div>
    );
};
