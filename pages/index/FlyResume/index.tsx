import { RpgBox } from '@flyskypie/react-rpgui/rpg-box';

import { OtherResources } from './OtherResources';
import { Portfolio } from './Portfolio';

export const FlyResume: React.FC = () => {
    return (
        <>
            <h1 style={{ fontSize: "250%" }}>
                FlyPie
            </h1>
            <hr className="golden" />
            <div>
                <RpgBox type='golden'>
                    FlyPie 代表著業餘時間操作的角色。
                </RpgBox>
            </div>
            <br />
            <RpgBox type='grey'>
                <Portfolio />
            </RpgBox>
            <br />
            <RpgBox type='grey'>
                <OtherResources />
            </RpgBox>
        </>
    );
};
