// "use client";

// import { useEffect } from "react";
import location from "../../../assets/citadel.svg";
import Human from "../../../assets/human.svg";
import Male from "../../../assets/male.svg";
import Origin from "../../../assets/earth.svg";
import Alive from "../../../assets/live.svg";
import Arrow from "../../../assets/arrow-left.svg";
import Link from "next/link";
import Image from "next/image";
import { CharacterProps } from "../../../types/character";
import { InfosCharacter } from "@/components/infos-character";
import Card from "@/components/cards";

export default async function CharacterId({ params }: any) {
  const id = params.id;
  const res = await fetch(`https:rickandmortyapi.com/api/character/${id}`);
  const data: CharacterProps = await res.json();

  const responseOthersCharacters = await fetch(
    `https:rickandmortyapi.com/api/character/?species=${data.species}`
  );
  const othersCharacters = await responseOthersCharacters.json();

  const infoscharacters = [
    {
      icon: Alive,
      label: "Status",
      status: data.status,
    },
    {
      icon: Human,
      label: "Species",
      status: data.species,
    },
    {
      icon: Male,
      label: "Gender",
      status: data.gender,
    },
    {
      icon: Origin,
      label: "Origin",
      status: data.origin.name,
    },
    {
      icon: location,
      label: "Location",
      status: data.location.name,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div>
        <div className=" relative">
          <div className="bg-[#404040] w-full h-[150px] xl4:h-[242px] flex items-center justify-center   ">
            <div className="w-full  container flex items-center gap-8 ">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={Arrow}
                  alt="voltar para home"
                  width={40}
                  height={40}
                />
              </Link>
              <h1 className="font-bold text-[30px] xl4:text-[60px]  text-white  sm:px-[100px]">
                {data.name}
              </h1>
            </div>
          </div>
          <div className="md:absolute right-0 top-0">
            <Image
              className="bg-green-800 w-screen md:w-[300px] h-[240px] xl4:w-[653px] xl4:h-[484px] object-cover"
              src={data.image}
              width={600}
              height={484}
              alt="Imagem dos personagems"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="pt-[100px] md:pt-[200px] pb-[90px] xl4:pt-[322px] xl4:pb-[318px]">
          <div className=" flex container">
            <div
              className="grid grid-cols-1   sm:grid-cols-5
             justify-between gap-[80px] xl4:gap-[229.18px] mx-auto "
            >
              {infoscharacters.map((character) => (
                <InfosCharacter key={character.label} character={character} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full container pb-10">
        <h2 className="font-bold text-[28px] sm:text-[40px] text-[#404040] mb-10">
          Outros Personagens
        </h2>
        <div className="flex items-center justify-center xl:justify-between flex-wrap gap-[40px]">
          {othersCharacters.results.length > 0 &&
            othersCharacters.results
              .slice(0, 3)
              .map((character: CharacterProps) => (
                <Card
                  key={character.id}
                  character={character}
                  href="character"
                />
              ))}
        </div>
      </div>
    </div>
  );
}
