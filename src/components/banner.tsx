export default function Banner() {
  return (
    <div
      className="w-full xl4:h-[450px] h-[400px] bg-no-repeat bg-cover flex flex-col bg-center justify-center"
      style={{
        backgroundImage: `url(https://i.imgur.com/78LO4y9.png)`,
      }}
    >
      <div className="flex flex-col gap-6 container">
        <h1 className=" text-[60px]  xl4:text-[60px] xl4:w-[650px]  text-white font-bold w-full">
          Filtro de personagens
        </h1>
        <p className="w-full md:w-[600px] xl3:w-[500px] xl4:w-[722px] sm:font-normal  xl4:font-bold font-bold text-white text-[14px] sm:text-[24px] xl4:text-[32px]">
          Confira os principais dados dos personagens de Rick and Morty, como
          seu nome, seu status e muito mais abaixo!
        </p>
      </div>
    </div>
  );
}
