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
import { BookIcon } from '../../icons/Book';
import { CPlusPlusIcon } from '../../icons/CPlusPlus';
import { LinuxIcon } from '../../icons/Linux';
import { KubernetesIcon } from '../../icons/Kubernetes';
import { DockerIcon } from '../../icons/Docker';
import { TerraformIcon } from '../../icons/Terraform';
import { GitIcon } from '../../icons/Git';
import { PhpIcon } from '../../icons/Php';
import { NextJsIcon } from '../../icons/NextJs';
import { KotlinIcon } from '../../icons/Kotlin';
import { HtmlIcon } from '../../icons/Html';
import { CssIcon } from '../../icons/Css';
import { ShellIcon } from '../../icons/Shell';
import { LaravelIcon } from '../../icons/Laravel';
import { Link } from '../../components/Link';

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

                    <RpgSlot tooltip="Side Project 維基">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://flyskypie.github.io/sideprojects-wiki/'>
                            <BookIcon size={48} />
                        </a>
                    </RpgSlot>
                </div>
            </div>
            <hr />
            <div style={{ padding: '0 1rem' }}>

                <h4 style={{ textDecoration: 'none' }}>
                    <Link href='/skills'>
                        技能
                    </Link>
                </h4>
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
                        <PythonIcon size={44} />
                    </RpgSlot>
                    <RpgSlot tooltip="C++">
                        <CPlusPlusIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Linux">
                        <LinuxIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Kubernetes">
                        <KubernetesIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Docker">
                        <DockerIcon size={54} />
                    </RpgSlot>
                    <RpgSlot tooltip="Terraform">
                        <TerraformIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Git">
                        <GitIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="PHP">
                        <PhpIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Next.js">
                        <NextJsIcon />
                    </RpgSlot>
                    <RpgSlot tooltip="Kotlin">
                        <KotlinIcon size={38} />
                    </RpgSlot>
                    <RpgSlot tooltip="HTML">
                        <HtmlIcon size={40} />
                    </RpgSlot>
                    <RpgSlot tooltip="CSS">
                        <CssIcon size={40} />
                    </RpgSlot>
                    <RpgSlot tooltip="Bash/Shell">
                        <ShellIcon size={40} />
                    </RpgSlot>
                    <RpgSlot tooltip="Laravel">
                        <LaravelIcon size={40} />
                    </RpgSlot>
                </div>
            </div>
        </>
    );
};
