import Banner from "@/components/banner";
import Card from "@/components/cards";
import Input from "@/components/input";
import { CharacterProps } from "../types/character";

export default async function Home() {
  const res = await fetch("https:rickandmortyapi.com/api/character");
  const data = await res.json();

  return (
    <main className="w-full overflow-x-hidden">
      <Banner />

      {/* <Input /> */}

      <div className="xl:grid xl:grid-cols-4 flex  justify-center flex-wrap gap-[40px] px-0 py-10 xl:px-[120px] xl:py-[245px] ">
        {data.results.length > 0 &&
          data.results.map((item: CharacterProps) => (
            <Card key={item.id} character={item} />
          ))}
      </div>
    </main>
  );
}
