"use client";

interface IPaginationProps {
  count: number;
  totalPage: number;
  setCount: (value: number) => void;
}

export default function Pagination({
  count,
  setCount,
  totalPage,
}: IPaginationProps) {
  function prevewCount() {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }

  function nextCount() {
    if (count === totalPage) {
      setCount(totalPage);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-7 py-[48px]">
        <button
          onClick={prevewCount}
          disabled={count === 1}
          className="bg-[#A8C700] disabled:bg-gray-400 w-[130px]  sm:w-[200px] h-[35px] hover:bg[#def84b] rounded-md text-[#474747] font-semibold"
        >
          Anterior
        </button>
        <button className="bg-[#A8C700] w-[50px] h-[35px] rounded-md text-[#474747] font-semibold">
          {count}
        </button>
        <button
          onClick={nextCount}
          disabled={count === totalPage}
          className="bg-[#A8C700] disabled:bg-gray-400 w-[130px]  sm:w-[200px] h-[35px] rounded-md text-[#474747] font-semibold"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
