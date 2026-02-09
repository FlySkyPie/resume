import { RpgButton } from '@flyskypie/react-rpgui/rpg-button';
import { RpgBox } from '@flyskypie/react-rpgui/rpg-box';

import { Link } from '../../../components/Link';


export const WeiResume: React.FC = () => {
    return (
        <>
            <h1 style={{ fontSize: "250%" }}>
                Wei Ji
            </h1>
            <hr className="golden" />
            <RpgBox type='golden'>
                Wei Ji 代表著工作時操作的角色。
            </RpgBox>
            <br />
            <RpgBox type='grey'>
                <h1 style={{ fontSize: "150%" }}>工作經歷</h1>
                <hr />
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://dyadicgames.com">Dyadic Games</a>/
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://dyadicsolutions.com.tw">Dyadic Solutions</a>
                    {" "} (2020~2025)
                </p>
                <p className="text-right">Software Engineer/TPO</p>
                <div className="text-center">
                    <Link href='/dyadic'>
                        <RpgButton type='golden' style={{ lineHeight: '50px' }}>
                            查看細節
                        </RpgButton>
                    </Link>
                </div>
            </RpgBox>
            <br />
            <RpgBox type='grey'>
                <h1 style={{ fontSize: "150%" }}>學歷</h1>
                <ul>
                    <li>國立虎尾科技大學 (2015~2020)
                        <ul>
                            <li>材料科學與工程系</li>
                        </ul>
                    </li>

                    <li>光復高級中學 (2012~2015)
                        <ul>
                            <li>資訊科</li>
                        </ul>
                    </li>
                </ul>
            </RpgBox>
        </>
    );
};