import { RpgButton } from '@flyskypie/react-rpgui/rpg-button';
import { RpgBox } from '@flyskypie/react-rpgui/rpg-box';
import '@flyskypie/react-rpgui/css/button';
import '@flyskypie/react-rpgui/css/box';


export const FlyResume: React.FC = () => {
    return (
        <>
            <h1 style={{ fontSize: "250%" }}>
                FlyPie
            </h1>
            <hr className="golden" />
            <p>
                <RpgBox type='golden'>
                    FlyPie 代表著業餘時間操作的角色。
                </RpgBox>
            </p>
        </>
    );
};