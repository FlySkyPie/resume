import { RpgButton } from "@flyskypie/react-rpgui/rpg-button";

import chibiImgUrl from './r3f-chibi-shootgame.webp';
import shootImgUrl from './aimAndShoot.webp';
import ariadneImgUrl from './ariadne-gis.webp';

export const Portfolio: React.FC = () => {
    return (
        <>
            <h2 style={{ fontSize: "150%" }}>精選作品集</h2>
            <hr />

            <h4 style={{ margin: 0 }}>Ariadne GIS  (2025)</h4>
            <div className="flex-row" style={{ padding: '1rem', gap: '1rem' }}>
                <img src={ariadneImgUrl} style={{ width: '100%', imageRendering: 'auto' }} />
                <p>使用 React 和 Mapbox 實作的概念驗證 Web GIS。</p>
                <p>被驗證概念：基於 Windows (XP) UX 的 GIS。</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', gap: '0.5rem' }}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/FlySkyPie/ariadne-gis">
                    <RpgButton>原始碼</RpgButton>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://flyskypie.github.io/ariadne-gis/">
                    <RpgButton>線上 Demo</RpgButton>
                </a>
            </div>
            <hr />

            <h4 style={{ margin: 0 }}>R3F Chibi Shootgame (2023)</h4>
            <div className="flex-row" style={{ padding: '1rem', gap: '1rem' }}>
                <img src={chibiImgUrl} style={{ width: '100%', imageRendering: 'auto' }} />
                <p>使用 R3F (Three.js + React) 以及 Dragonbones 實作的概念驗證小遊戲。</p>
                <p>被驗證概念：3D 場景 + 2D 骨架人物。</p>
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

            <h4 style={{ margin: 0 }}>Aim and Shoot (2023)</h4>
            <div className="flex-row" style={{ padding: '1rem', gap: '1rem' }}>
                <img src={shootImgUrl} style={{ width: '100%', imageRendering: 'auto' }} />
                <p>
                    學習 ECS, Web component... 等技術，並且以重構別人的專案作為學習標的。
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', gap: '0.5rem' }}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/FlySkyPie/aimAndShoot">
                    <RpgButton>原始碼</RpgButton>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://flyskypie.github.io/aimAndShoot/">
                    <RpgButton>線上 Demo</RpgButton>
                </a>
            </div>
        </>
    );
};