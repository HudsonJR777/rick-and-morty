"use client";

import Banner from "@/components/banner";
import Card from "@/components/cards";
import Input from "@/components/input";
import { CharacterProps } from "../types/character";
import Pagination from "@/components/pagination";

export default async function Home() {
  const res = await fetch("https:rickandmortyapi.com/api/character");
  const data = await res.json();

  return (
    <main className="w-full overflow-hidden">
      <Banner />

      <div className="w-full container mt-10">
        <div className="md:w-[573px] w-full">
          <Input />
        </div>
      </div>

      <div className="mt-10 xl1:grid xl1:grid-cols-4 flex justify-items-center justify-center flex-wrap gap-[40px] px-0 container ">
        {data.results.length > 0 &&
          data.results.map((item: CharacterProps) => (
            <Card key={item.id} character={item} />
          ))}
      </div>

      <Pagination />
    </main>
  );
}
