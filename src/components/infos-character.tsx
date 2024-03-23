import Image from "next/image";

export function InfosCharacter({ character }: any) {
  return (
    <div className=" flex-col flex items-center  gap-[10px]">
      <div className="h-[80px] w-[80px] block">
        <Image
          src={character.icon}
          alt={character.label}
          className="h-[80px] w-[80px] "
          width={80}
          height={80}
        />
      </div>
      <div className="mt-5">
        <h5 className="font-bold text-[tomato] text-center text-[15px] xl4:text-[24px]">
          {character.label}
        </h5>
        <h6 className="font-bold text-[#727272] text-[19px] text-center xl4:text-[32px]">
          {character.status}
        </h6>
      </div>
    </div>
  );
}
