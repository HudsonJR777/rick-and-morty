"use client";

import Image from "next/image";
import Search from "../assets/lupa.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Input() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch() {
    if (search !== "") {
      router.push(`/search/?name=${search}`);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4  w-full h-[28px] border border-solid-[5px] border-black focus:outline-none focus:border-[#CFE071] rounded-[10px] px-5 py-5 ">
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          className="placeholder-[#474747] w-full outline-none"
          placeholder="Buscar Personagem"
        />
        <div className="flex-shrink-0 ">
          <Image
            onClick={handleSearch}
            src={Search}
            alt="search"
            width={25}
            height={25}
            className="cursor-pointer hover:h-[30px]"
          />
        </div>
      </div>
    </div>
  );
}
