import { RpgProvider } from '@flyskypie/react-rpgui/rpg-provider';
import { RpgButton } from '@flyskypie/react-rpgui/rpg-button';
import { RpgBox } from '@flyskypie/react-rpgui/rpg-box';
import '@flyskypie/react-rpgui/css';
import '@flyskypie/react-rpgui/css/button';
import '@flyskypie/react-rpgui/css/box';

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";
import '../primitive-style/main.scss';

import "./style.css";
import { Sidebar } from './Sidebar';
import { Content } from './Content';

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <RpgProvider className='medium-container'>
      <div className="flex-row">
        <Sidebar>
          <Logo />
          <Link href="/">Welcome</Link>
          <Link href="/todo">Todo</Link>
          <Link href="/star-wars">Data Fetching</Link>
        </Sidebar>
        <Content>{children}</Content>
      </div>
    </RpgProvider>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
