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

export default async function CharacterId({ params }: any) {
  const id = params.id;
  const res = await fetch(`https:rickandmortyapi.com/api/character/${id}`);
  const data: CharacterProps = await res.json();

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

  // console.log(data);

  //   async function loadCharacter() {
  //     const res = await fetch("https:rickandmortyapi.com/api/character/1");
  //     const data = await res.json();
  //     console.log(data);
  //   }

  //   useEffect(() => {
  //     loadCharacter();
  //   }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div>
        <div className="flex justify-end  flex-wrap sm:flex-nowrap ">
          <div className="bg-[#404040] w-full h-[150px] xl4:h-[242px] flex gap-3 py-[24px] px-[28px] sm:items-center flex-col sm:flex-row   sm:px-[80px]  ">
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
          <div>
            <Image
              className="bg-green-800 w-screen sm:w-[300px] h-[240px] xl4:w-[653px] xl4:h-[484px] object-cover"
              src={data.image}
              width={600}
              height={484}
              alt="Imagem dos personagems"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="pt-[100px] pb-[90px] xl4:pt-[322px] xl4:pb-[318px]">
          <div className=" flex px-[228px]">
            <div
              className="grid grid-cols-1   sm:grid-cols-5
             justify-between gap-[80px] xl4:gap-[229.18px] "
            >
              {infoscharacters.map((character) => (
                <InfosCharacter key={character.label} character={character} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-[28px] sm:text-[40px] text-[#404040] px-[28px] sm:px-[228px] sm:pb-[60px] ">
          Outros Personagems
        </h1>
      </div>

      <div></div>
    </div>
  );
}
