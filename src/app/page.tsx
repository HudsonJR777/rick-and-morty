import Banner from "@/components/banner";
import Card from "@/components/cards";
import Input from "@/components/input";
import { CharacterProps } from "../types/character";

export default async function Home() {
  const res = await fetch("https:rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data.results[0]);
  return (
    <main>
      <Banner />

      <Input />

      <div className="flex justify-center flex-wrap gap-[40px] px-[120px] py-[245px] ">
        {data.results.length > 0 &&
          data.results.map((item: CharacterProps) => (
            <Card key={item.id} character={item} />
          ))}
      </div>
    </main>
  );
}
