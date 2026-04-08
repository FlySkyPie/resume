import { RpgBox } from "@flyskypie/react-rpgui/rpg-box";
import { RpgButton } from "@flyskypie/react-rpgui/rpg-button";

import imageUrl from './project-furnace-cover.webp';

export default function Page() {

  return (
    <>
      <h2 style={{ fontSize: "150%" }}>
        大學畢業專題：熔爐
      </h2>
      <hr className="golden" />
      <div className="flex-row" style={{ padding: '1rem', gap: '1rem' }}>
        <img src={imageUrl} style={{ width: '100%', imageRendering: 'auto' }} />
        <p>使用快速迭代開發，涉及 CAD、Arduino、Qt、樹莓派、前後端程式、焊接...等技術與工藝，
          搭建一個可穩定在 800 °C的熱處理爐並使用鋁進行砂模鑄造。</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end', gap: '0.5rem' }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://flyskypie.github.io/blog/2026-04-07_mobile-furnace/">
          <RpgButton>部落格文章</RpgButton>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/FlySkyPie/Project-Furnace">
          <RpgButton>程式碼</RpgButton>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://flyskypie.github.io/2019-01-10_mobile-furnace-slider/">
          <RpgButton>提報投影片</RpgButton>
        </a>
      </div>
    </>
  );
}
