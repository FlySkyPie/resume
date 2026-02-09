import { RpgProvider } from '@flyskypie/react-rpgui/rpg-provider';

import { CharacterProvider } from '../contexts/character';
import { CharacterOverview } from '../widgets/CharacterOverview';

import { Sidebar } from './Sidebar';
import { Content } from './Content';
import './style.css';

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <CharacterProvider>
      <RpgProvider className='medium-container'>
        <div className="flex-row">
          <Sidebar>
            <CharacterOverview />
          </Sidebar>
          <Content>{children}</Content>
        </div>
      </RpgProvider>
    </CharacterProvider>
  );
}
