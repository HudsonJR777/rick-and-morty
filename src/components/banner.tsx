export default function Banner() {
  return (
    <div
      className="w-full h-[300px]  bg-no-repeat bg-cover flex flex-col justify-center"
      style={{
        backgroundImage: `url(https://i.imgur.com/78LO4y9.png)`,
      }}
    >
      <div className="flex flex-col gap-6 px-[120px] xl4:px-[228px]">
        <h1 className=" text-[32px]  xl4:text-[60px] w-[650px]  text-white font-bold">
          Filtro de personagens
        </h1>
        <p className="w-[500px] xl4:w-[722px]  text-white text-[18px] xl4:text-[32px]">
          Confira os principais dados dos personagens de Rick and Morty, como
          seu nome, seu status e muito mais abaixo!
        </p>
      </div>
    </div>
  );
}
