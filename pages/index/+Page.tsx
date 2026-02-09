import { Character } from "../../constants/character.js";
import { useCharacter } from "../../contexts/character.js";

import { FlyResume } from "./FlyResume/index.js";
import { WeiResume } from "./WeiResume/index.js";

export default function Page() {
  const { character } = useCharacter();

  return (
    <>
      {character === Character.FlyPie ?
        <FlyResume /> :
        <WeiResume />}
    </>
  );
}
