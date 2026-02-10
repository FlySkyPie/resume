import { RpgBox } from "@flyskypie/react-rpgui/rpg-box";

export default function Page() {

  return (
    <>
      <h2 style={{ fontSize: "150%" }}>
        技能
      </h2>
      <hr className="golden" />
      <div>
        <RpgBox type='golden'>
          以下粗略估計的使用時間代表熟悉程度，<br />
          <code>{">"}</code> 代表經驗上相對有自信，<br />
          <code>{"<"}</code> 代表稍微接觸過但是沒信心。
        </RpgBox>
      </div>
      <br />
      <RpgBox type='grey'>
        <h3>程式語言</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Typescript</p></div>
          <div className="flex-small one-third"><p>{">"} 5 年</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Javascript</p></div>
          <div className="flex-small one-third"><p>{">"} 4 年</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Node.js</p></div>
          <div className="flex-small one-third"><p>{">"} 3 年</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Python</p></div>
          <div className="flex-small one-third"><p>{">"} 200 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>C++</p></div>
          <div className="flex-small one-third"><p>{"<"} 200 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>OO PHP</p></div>
          <div className="flex-small one-third"><p>{">"} 40 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>.NET</p></div>
          <div className="flex-small one-third"><p>{"<"} 80 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>前端框架</h3>
        <div className="flex-row">
          <div className="flex-small"><p>React</p></div>
          <div className="flex-small one-third"><p>{">"} 5 年</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Vue</p></div>
          <div className="flex-small one-third"><p>{"<"} 16 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Jetpack Compose</p></div>
          <div className="flex-small one-third"><p>{"<"} 16 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>SwiftUI</p></div>
          <div className="flex-small one-third"><p>{"<"} 40 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>react-map-gl</p></div>
          <div className="flex-small one-third"><p>{">"} 400 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>R3F (React Three Fiber) </p></div>
          <div className="flex-small one-third"><p>{">"} 160 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Next.js</p></div>
          <div className="flex-small one-third"><p>{"<"} 16 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>後端框架</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Laravel</p></div>
          <div className="flex-small one-third"><p>{">"} 80 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Express</p></div>
          <div className="flex-small one-third"><p>{">"} 40 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Nest.js</p></div>
          <div className="flex-small one-third"><p>{"<"} 80 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>遊戲引擎</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Unity3D</p></div>
          <div className="flex-small one-third"><p>{"<"} 40 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>React Game Engine</p></div>
          <div className="flex-small one-third"><p>{"<"} 80 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Phaser</p></div>
          <div className="flex-small one-third"><p>{"<"} 40 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Godot</p></div>
          <div className="flex-small one-third"><p>{"<"} 8 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>Web 3D</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Three.js</p></div>
          <div className="flex-small one-third"><p>{">"} 200 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>Web GIS</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Mapbox GL JS</p></div>
          <div className="flex-small one-third"><p>{">"} 400 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>CesiumJS</p></div>
          <div className="flex-small one-third"><p>{">"} 40 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>電子商務</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Shopify</p></div>
          <div className="flex-small one-third"><p>{"<"} 400 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Stripe</p></div>
          <div className="flex-small one-third"><p>{"<"} 40 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Ecwid</p></div>
          <div className="flex-small one-third"><p>{"<"} 8 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Medusa.js</p></div>
          <div className="flex-small one-third"><p>{">"} 40 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>佈署工具</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Docker</p></div>
          <div className="flex-small one-third"><p>{"<"} 200 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Terraform</p></div>
          <div className="flex-small one-third"><p>{"<"} 80 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Kubernetes</p></div>
          <div className="flex-small one-third"><p>{"<"} 40 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>雲端平台</h3>
        <div className="flex-row">
          <div className="flex-small"><p>GCP (Google Cloud Platform) </p></div>
          <div className="flex-small one-third"><p>{"<"} 100 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>AWS (Amazon Web Services) </p></div>
          <div className="flex-small one-third"><p>{"<"} 20 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>專案管理工具</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Jira</p></div>
          <div className="flex-small one-third"><p>{">"} 4 年</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>OpenProject</p></div>
          <div className="flex-small one-third"><p>{"<"} 160 小時</p></div>
        </div>
      </RpgBox>

      <RpgBox type='grey'>
        <h3>CSS/Style/Theme</h3>
        <div className="flex-row">
          <div className="flex-small"><p>Tailwind CSS</p></div>
          <div className="flex-small one-third"><p>{"<"} 20 小時</p></div>
        </div>
        <div className="flex-row">
          <div className="flex-small"><p>Material UI</p></div>
          <div className="flex-small one-third"><p>{">"} 160 小時</p></div>
        </div>
      </RpgBox>
    </>
  );
}
