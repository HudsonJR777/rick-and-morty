import Banner from "@/components/banner";
import Card from "@/components/cards";
import Input from "@/components/input";
import { CharacterProps } from "@/types/character";
// import {  } from "next/navigation";

export default async function SearchPage({ searchParams }: any) {
  const name = searchParams.name;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  const data = await res.json();

  return (
    <main>
      <Banner />

      <Input />

      <div className="grid grid-cols-3 gap-[80px] px-[120px] py-[245px] ">
        {data.results?.length > 0 ? (
          data.results.map((item: CharacterProps) => (
            <Card key={item.id} character={item} />
          ))
        ) : (
          <div className="flex items-center justify-center w-full p-auto">
            <h1 className="font-bold text-xl  text-[#A8C700]">
              Não encontramos esse personagem em nenhum universo
            </h1>
          </div>
        )}
      </div>
    </main>
  );
}
