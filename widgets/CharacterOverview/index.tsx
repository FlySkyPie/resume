import { RpgButton } from '@flyskypie/react-rpgui/rpg-button';

import { Avatar } from '../../components/Avatar';
import { GitHubIcon } from '../../icons/GitHub';
import { FlyPieIcon } from '../../icons/FlyPie';
import { RpgSlot } from '../../components/RpgSlot';
import { PythonIcon } from '../../icons/Python';
import { ReactIcon } from '../../icons/React';
import { JavascriptIcon } from '../../icons/Javascript';
import { TypescriptIcon } from '../../icons/Typescript';
import { NodeIcon } from '../../icons/Node';
import { useCharacter } from '../../contexts/character';

export const CharacterOverview: React.FC = () => {
    const { character, toggle } = useCharacter();

    return (
        <>
            <div style={{ padding: '0 1rem' }}>
                <div className="flex-row">
                    <Avatar mode={character} />
                </div>
                <div className="flex-row vertical-center">
                    <RpgButton
                        onClick={toggle}>
                        切換角色
                    </RpgButton>

                </div>


            </div>
            <hr />
            <div style={{ padding: '0 1rem' }}>
                <h4 style={{ textDecoration: 'none' }}>其他網站</h4>
                <div className="flex-row" style={{ gap: '12px' }}>
                    <RpgSlot tooltip="GitHub">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://github.com/FlySkyPie'>
                            <GitHubIcon />
                        </a>
                    </RpgSlot>

                    <RpgSlot tooltip="個人網站">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://flyskypie.github.io/'>
                            <FlyPieIcon size={44} />
                        </a>
                    </RpgSlot>
                </div>
            </div>
            <hr />
            <div style={{ padding: '0 1rem' }}>
                <h4 style={{ textDecoration: 'none' }}>技能</h4>
                <div className="flex-row" style={{ gap: '12px' }}>
                    <RpgSlot tooltip="Javascript">
                        <JavascriptIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Typescript">
                        <TypescriptIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Node">
                        <NodeIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="React">
                        <ReactIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Python">
                        <PythonIcon />
                    </RpgSlot>
                </div>
            </div>
        </>
    );
};
