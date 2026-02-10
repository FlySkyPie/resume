import { RpgBox } from "@flyskypie/react-rpgui/rpg-box";

export default function Page() {

  return (
    <>
      <h2 style={{ fontSize: "150%" }}>
        Dyadic
      </h2>
      <hr className="golden" />

      <h3>精選事蹟</h3>
      <ul>
        <li>
          高度自組織。
          <ul>
            <li>率先使用 Git 追蹤生成式程式碼，並促使公司制度化該模式。</li>
            <li>以議事規則開會。</li>
            <li>視情況主動撰寫進度書面報告。（將文件視同一種程式碼交付）</li>
            <li>率先 Emoji 作為通訊軟體 ACK，並促使成為公司文化。</li>
            <li>特殊行為會在程式碼註解標籤對應特定的 Issue 號。</li>
            <li>嚴格執行時間管理系統。</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          熟悉使用專案管理軟體（如：Jira、OpenProject...等 Kanban 類軟體）。
          <ul>
            <li>
              能將需求、Spec、會議 Action Item、技術債（潛在問題）轉換成 Ticket/Issue。
            </li>
            <li>
              視情況使用 User Story 或 Gherkin 語法。
            </li>
            <li>
              能將抽象需求分解成技術實現的子任務。
            </li>
            <li>
              善用留言功能進行討論供日後追蹤 Context。
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          適時引入技術解決技術痛點。
          <ul>
            <li>Headless Libreoffice 作為試算表 Runtime (<a href="#advertisement">廣告顧問</a>)</li>
            <li>網頁前端運行 SQLite 儲存並處理複雜單字關聯 (<a href="#education">線上教育平台</a>)</li>
            <li>使用 SFM (Structure-from-Motion) 處理攝影機資訊重建 (<a href="#expo">代號-E</a>)</li>
            <li>使用單元測試作為需求溝通媒介，消弭數值化、難以自然語言描述之需求 (多個專案)</li>
            <li>引入 Playwright 建立基本的 A11y QC (多個專案)</li>
            <li>引入 Puppeteer 取代人工測試加速開發 (<a href="#alternate-reality">實境遊戲</a>)</li>
            <li>引入 Terraform 建立雲端資源 IaC (多個專案)</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          適時使用架構解決技術痛點。
          <ul>
            <li>React/OOP 實做地圖編輯功能，兼顧軟體性能、程式碼職責分離與 UX。 (<a href="#forest">林木業</a>)</li>
            <li>React/ECS 實做 AR 渲染引擎，兼顧軟體性能與程式碼職責分離。 (<a href="#eyelashes">美睫平台</a>)</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          領域驅動開發。
          <ul>
            <li>開發德文教育遊戲之前先學習德文基本規則。 (<a href="#education">線上教育平台</a>)</li>
            <li>開發之前先跟客戶釐清領域模型。 (<a href="#forest">林木業</a>)</li>
            <li>使用已知向量繪圖軟體的行為和客戶溝通繪圖功能的需求。 (<a href="#forest">林木業</a>)</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          能承擔高強度工作條件。
          <ul>
            <li>尖峰情況單日能處理五個不同的專案。</li>
            <li>需求模糊時仍能以 TDD/BDD/DDD... 等不同手段釐清需求。</li>
            <li>同時身任不同技術棧的前端開發、後端開發、運維佈署...。</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>資訊安全
          <ul>
            <li>遠端故障排除 GitLab 伺服器，確定被攻擊特徵。</li>
            <li>調閱 GCP 日誌，確定被攻擊特徵。</li>
          </ul>
        </li>
      </ul>

      <hr />

      <h3>經手專案</h3>

      <p>
        <RpgBox type='golden'>
          任職期間以處理第三方（客戶）的專案居多，因無法公開透漏客戶資訊，故以下專案皆進行適度混淆。
        </RpgBox>
      </p>


      <RpgBox type='grey'>
        <h4>2025</h4>
        <ul>
          <li id="advertisement">
            廣告顧問
            <ul>
              <li>產品概述：廣告投放諮詢服務資料表線上化</li>
              <li>負責區塊：後端、佈署</li>
              <li>Techstack：
                <ul>
                  <li>前端：React</li>
                  <li>後端：FastAPI (Python) + Libreoffice</li>
                  <li>佈署：GCP (Terraform)</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            眼睛週邊
            <ul>
              <li>產品概述：landing page/線上商店</li>
              <li>負責區塊：佈署</li>
              <li>Techstack：
                <ul>
                  <li>電子商務：Ecwid</li>
                  <li>前端/後端：Next.js</li>
                  <li>佈署：GCP (Terraform)</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            媒合平台
            <ul>
              <li>產品概述：接案媒合平台</li>
              <li>負責區塊：人力派遣</li>
              <li>Techstack： React, Nest.js</li>
            </ul>
          </li>

          <li>
            食品公司
            <ul>
              <li>產品概述：線上商店</li>
              <li>負責區塊：後台設定</li>
              <li>Techstack： Shopify</li>
            </ul>
          </li>

          <li>
            電信公司
            <ul>
              <li>產品概述：雲端渲染 VR</li>
              <li>負責區塊：人力派遣</li>
              <li>Techstack： Proton, Electric-Maple</li>
            </ul>
          </li>
        </ul>
      </RpgBox>

      <RpgBox type='grey'>
        <h4>2024</h4>
        <ul>
          <li>
            廣告布條製造商
            <ul>
              <li>產品概述：線上商店</li>
              <li>負責區塊：前後端、後台配置、佈署</li>
              <li>Techstack：
                <ul>
                  <li>電子商務：Shopify</li>
                  <li>前端：Three.js</li>
                  <li>後端：Express.js</li>
                  <li>佈署：GCP (Terraform)</li>
                </ul>
              </li>
            </ul>
          </li>

          <li id="eyelashes">
            美睫平台
            <ul>
              <li>產品概述：SaaS、假睫毛 AR</li>
              <li>負責區塊：AR 渲染引擎</li>
              <li>Techstack： React, Three.js</li>
            </ul>
          </li>

          <li>
            代號-A
            <ul>
              <li>產品概述：███ （公司內部專案）</li>
              <li>負責區塊：前後端、架構規劃</li>
              <li>Techstack： Keycloak, OpenFGA, Zod</li>
            </ul>
          </li>

          <li>
            代號-P
            <ul>
              <li>產品概述：███ （公司內部專案）</li>
              <li>負責區塊：前後端</li>
              <li>Techstack：
                <ul>
                  <li>前端： React, Three.js</li>
                  <li>後端： Unity3D, SFX Houdini, Blender, Python, FreeCAD</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            代號-F
            <ul>
              <li>產品概述：███ （公司內部專案）</li>
              <li>負責區塊：CLI 工具</li>
              <li>Techstack：Autodesk FBX SDK</li>
            </ul>
          </li>

          <li id="expo">
            代號-E
            <ul>
              <li>產品概述：███ （潛在客戶技術驗證）</li>
              <li>負責區塊：技術驗證</li>
              <li>Techstack： colmap</li>
            </ul>
          </li>
        </ul>
      </RpgBox>

      <RpgBox type='grey'>
        <h4>2023</h4>
        <ul>
          <li>
            智慧汽車
            <ul>
              <li>產品概述：掃描 App SDK</li>
              <li>負責區塊：小重構</li>
              <li>Techstack： Kotlin</li>
            </ul>
          </li>

          <li>
            智慧房仲
            <ul>
              <li>產品概述：線上看房/導覽</li>
              <li>負責區塊：前端（人力派遣）</li>
              <li>Techstack： Three.js</li>
            </ul>
          </li>

          <li>
            智慧物流
            <ul>
              <li>產品概述：Dashboard</li>
              <li>負責區塊：Dashboard 部份前端組件</li>
              <li>Techstack： React, Rx.js</li>
            </ul>
          </li>

          <li id="forest">
            林木業
            <ul>
              <li>產品概述：林木業 GIS (Geographic Information System) Dashboard</li>
              <li>負責區塊：Dashboard 前端、大部分前端地圖組件</li>
              <li>Techstack： React + Mapbox GL JS</li>
            </ul>
          </li>

          <li>
            桌遊 App （未上線）
            <ul>
              <li>產品概述：桌遊配樂 App 的網頁商店</li>
              <li>負責區塊：部份網頁商店前後端、末期測試與 debug</li>
              <li>Techstack：
                <ul>
                  <li>前端： React</li>
                  <li>後端： Medusa.js</li>
                  <li>金流： Stripe</li>
                  <li>測試： Grafana k6, Puppeteer</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

      </RpgBox>

      <RpgBox type='grey'>
        <h4>2022</h4>
        <ul>
          <li>
            ███
            <ul>
              <li>產品概述：某 App</li>
              <li>負責區塊：前端（人力派遣）</li>
              <li>Techstack： SwiftUI</li>
            </ul>
          </li>

          <li>
            ███（未上線）
            <ul>
              <li>產品概述：3D 汽車 NFT</li>
              <li>負責區塊：前端</li>
              <li>Techstack： React + Three.js (R3F, React Three Fiber)</li>
            </ul>
          </li>

          <li>
            某知名手機品牌（市佔前五之一）
            <ul>
              <li>產品概述：員工教育訓練遊戲（知識對戰）</li>
              <li>負責區塊：前端</li>
              <li>Techstack： React（前端）, .NET（後端）</li>
            </ul>
          </li>

          <li>
            某知名手機品牌（市佔前五之一）
            <ul>
              <li>產品概述：員工教育訓練遊戲（大家來找碴）</li>
              <li>負責區塊：前端</li>
              <li>Techstack： Phaser.js</li>
            </ul>
          </li>

          <li id="education">
            線上教育平台
            <ul>
              <li>產品概述：孩童語言學習 App</li>
              <li>負責區塊：前端</li>
              <li>Techstack： React (React Game Engine)</li>
            </ul>
          </li>
        </ul>
      </RpgBox>

      <RpgBox type='grey'>
        <h4>2021</h4>
        <ul>
          <li>
            感測器公司
            <ul>
              <li>產品概述： 3D 點雲顯示跨平台 SDK</li>
              <li>負責區塊： 動態函式庫 Binding、CI/CD 自動化</li>
              <li>Techstack： Xamarin</li>
            </ul>
          </li>

          <li id='alternate-reality'>
            實境遊戲公司
            <ul>
              <li>產品概述：實境遊戲 App</li>
              <li>負責區塊：年度維護（內容更新）、前後端小修補</li>
              <li>Techstack
                <ul>
                  <li>前端： jQuery, AMD (Asynchronous Module Definition), Backbone.js, Bootstrap</li>
                  <li>後端： Laravel</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            ███（屬性不明）
            <ul>
              <li>產品概述：登山路線 Web3D</li>
              <li>負責區塊：從 0 到 1、前端</li>
              <li>Techstack： CesiumJS</li>
            </ul>
          </li>
        </ul>
      </RpgBox>


      <RpgBox type='grey'>
        <h4>2020</h4>
        <ul>
          <li>
            物流公司
            <ul>
              <li>產品概述： 物流 Dashboard</li>
              <li>負責區塊： Dashboard 部份前端組件</li>
              <li>Techstack： React, D3.js</li>
            </ul>
          </li>
        </ul>
      </RpgBox>
    </>
  );
}
