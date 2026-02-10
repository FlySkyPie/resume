import { RpgBox } from '@flyskypie/react-rpgui/rpg-box';

import imgUrl from './r3f-chibi-shootgame.webp';
import { RpgButton } from '@flyskypie/react-rpgui/rpg-button';

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
                <h1 style={{ fontSize: "150%" }}>精選作品集</h1>
                <hr />

                <h4 style={{ margin: 0 }}>R3F Chibi Shootgame (2023)</h4>
                <div className="flex-row" style={{ padding: '1rem', gap: '1rem' }}>
                    <img src={imgUrl} style={{ width: '100%' }} />
                    <p>使用 R3F (Three.js + React) 以及 Dragonbones 實作的概念驗證小遊戲。</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'end', gap: '0.5rem' }}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/FlySkyPie/r3f-chibi-shootgame">
                        <RpgButton>原始碼</RpgButton>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://flyskypie.github.io/r3f-chibi-shootgame/">
                        <RpgButton>線上 Demo</RpgButton>
                    </a>
                </div>
                <hr />
                <p>想了解更多 FlyPie 的 Side Project 嗎?</p>
                <div className="text-center">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/FlySkyPie">
                        <RpgButton type='golden' style={{ lineHeight: '50px' }}>
                            前往 GitHub
                        </RpgButton>
                    </a>
                </div>
                <div className="text-center">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://flyskypie.github.io/sideprojects-wiki/">
                        <RpgButton type='golden' style={{ lineHeight: '50px' }}>
                            前往 Side Project 維基
                        </RpgButton>
                    </a>
                </div>

            </RpgBox>
        </>
    );
};