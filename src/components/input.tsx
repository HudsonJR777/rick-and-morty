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
    <div className="relative  px-[120px] xl4:px-[120px] pt-8 pb-0 xl4:py-[10px] ">
      <div className="">
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          className="px-[40px] pt-[21px] pb-[20px] w-[450px] h-[28px] xl4:w-[573px] border border-solid-[5px] border-black focus:outline-none focus:border-[#CFE071] rounded-[10px] placeholder-[#474747]"
          placeholder="Buscar Personagem"
        />
        <div className="absolute inset-y-0 left-[500px] xl4:left-[720px] flex items-center pl-3 top-8">
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
