import { RpgButton } from "@flyskypie/react-rpgui/rpg-button";

import wikiPreviewUrl from './tiddlywiki.webp';

export const OtherResources: React.FC = () => {
    return (
        <>
            <h1 style={{ fontSize: "150%" }}>其他資源</h1>
            <p>想了更了解 FlyPie 嗎?</p>


            <hr />
            <h4 style={{ margin: 0 }}>Side Project 維基</h4>
            <div className="flex-row" style={{ padding: '1rem', gap: '1rem' }}>
                <img
                    src={wikiPreviewUrl}
                    style={{ width: '100%', imageRendering: 'auto' }} />
            </div>
            <p>
                以維基百科條目的方式收錄了各種 Side Project，條目同時作為各種外部連結的索引，適合非技術人員瀏覽。
            </p>
            <p>有一陣子沒有更新了 (最後更新於 2024-03-24)。</p>
            <div className="text-center">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://flyskypie.github.io/sideprojects-wiki/">
                    <RpgButton type='golden' style={{ lineHeight: '50px' }}>
                        前往
                    </RpgButton>
                </a>
            </div>
            <hr />
            <h4>GitHub</h4>
            <p>
                超過 100 個 repository，包含 Fork 的、重構的、分解的、原創的、整合的、WIP 的...，大部分 FlyPie 業餘時間產出的程式碼都放有放在這裡。
            </p>
            <div className="text-center">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/FlySkyPie">
                    <RpgButton type='golden' style={{ lineHeight: '50px' }}>
                        前往
                    </RpgButton>
                </a>
            </div>
            <hr />
            <h4>個人網站（部落格）</h4>

            <div className="text-center">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://flyskypie.github.io/blogs/">
                    <RpgButton type='golden' style={{ lineHeight: '50px' }}>
                        前往
                    </RpgButton>
                </a>
            </div>
            <hr />
            <h4>個人網站（廢文）</h4>
            <p>
                嘗試作為 FB 這種 Microblog 替代品建立的區域。
            </p>
            <div className="text-center">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://flyskypie.github.io/posts/">
                    <RpgButton type='golden' style={{ lineHeight: '50px' }}>
                        前往
                    </RpgButton>
                </a>
            </div>
        </>
    );
};