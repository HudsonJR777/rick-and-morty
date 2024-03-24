import Image from "next/image";
import Link from "next/link";
import { CharacterProps } from "@/types/character";

interface ICardProps {
  character: CharacterProps;
  href: string;
}

export default function Card({ character, href }: ICardProps) {
  return (
    <div className="w-[320px] h-[300px] grid-cols-4 xl3:grid-cols-2 mb-[90px]  cursor-pointer rounded-md bg-[#F5F5F5] ">
      <div className="flex flex-col rounded-lg  group h-[100px] bg-[#F5F5F5] ">
        <Image
          className="w-full h-[200px] xl4:320 object-cover bg-no-repeat"
          src={character.image}
          alt={character.name}
          width={280}
          height={200}
        />

        <h6 className=" font-medium px-[20px] pt-[20px] xl4:text-[24px] text-[18px] text-[#474747]">
          {character.name}
        </h6>

        <div className="flex flex-col rounded-lg invisible group-hover:visible group-hover:bg-[#F5F5F5] ease">
          <span className="italic px-[20px] text-[#717171] text-[15] ">
            {character.location.name}
          </span>

          <div className="flex grid-cols-3 gap-10 pb-[18px] xl4:pb-[32px] ">
            <div className="flex flex-col px-[20px]">
              <h6 className="text-[16] font-medium text-black">Status</h6>
              <span className="font-light text-[#474747] text-sm">
                {character.status}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <h6 className="text-[16] font-medium text-black">Specie</h6>
              <span className="font-light text-[#474747] text-sm">
                {character.species}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <h6 className="text-[16] font-medium text-black">Gender</h6>
              <span className="font-light text-[#474747] text-sm">
                {character.gender}
              </span>
            </div>
          </div>
          <Link
            className="bg-[#33B4C4] text-white rounded-[40px] text-[18px] mb-[40px] px-7 mx-auto invisible group-hover:visible"
            href={`/${href}/${character.id}`}
          >
            Ver mais sobre
          </Link>
        </div>
      </div>
    </div>
  );
}
