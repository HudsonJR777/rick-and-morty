"use client";

import Banner from "@/components/banner";
import Card from "@/components/cards";
import Input from "@/components/input";
import { CharacterProps } from "../types/character";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [count, setCount] = useState(1);

  function loadCharacters() {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${count}`)
      .then((results) => setCharacters(results.data.results))
      .catch((error) => console.log("Ocorreu um erro", error));
  }

  useEffect(() => {
    loadCharacters();
  }, [count]);

  return (
    <main className="w-full overflow-hidden">
      <Banner />

      <div className="w-full container mt-10">
        <div className="md:w-[573px] w-full">
          <Input />
        </div>
      </div>

      <div className="mt-10 xl1:grid xl1:grid-cols-4 flex justify-items-center justify-center flex-wrap gap-[40px] px-0 container ">
        {characters.length > 0 &&
          characters.map((item: CharacterProps) => (
            <Card key={item.id} character={item} />
          ))}
      </div>

      <Pagination count={count} setCount={setCount} />
    </main>
  );
}
