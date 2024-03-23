import Image from "next/image";
import Link from "next/link";
import Location from "../../assets/citadel.svg";
import Human from "../../assets/human.svg";
import Male from "../../assets/male.svg";
import Origin from "../../assets/earth.svg";
import Alive from "../../assets/live.svg";
import Arrow from "../../assets/arrow-left.svg";

// type InfoCharacters = {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   gender: string;
//   origin: {
//     name: string;
//     url: string;
//   };
//   location: {
//     name: string;
//     url: string;
//   };
//   image: string;
// };

// interface ICardProps {
//   character: InfoCharacters;
// }

export default function CharacterPage() {
  return (
    <div>
      <div>
        <div className="flex justify-end">
          <div className="bg-[#404040] w-[1050px] h-[150px] xl4:w-[1267px] xl4:h-[242px] flex items-center px-[80px] ">
            <Link href="/cards">
              <Image src={Arrow} alt="arrwo" width={40} height={40} />
            </Link>
            <h1 className="font-bold text-[30px] xl4:text-[60px]  text-white px-[100px]">
              Rick Sanchez
            </h1>
          </div>
          <div>
            <h1 className="bg-green-800 w-[300px] h-[240px] xl4:w-[653px] xl4:h-[484px]">
              Imagem
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="pt-[100px] pb-[90px] xl4:pt-[322px] xl4:pb-[318px]">
          <div className=" flex px-[228px]">
            <div className="flex grid-cols-5 justify-between gap-[80px] xl4:gap-[229.18px] ">
              <div className=" flex-col flex items-center justify-between gap-[10px]">
                <Image src={Alive} alt="alive" width={80} height={80} />
                <h6 className="font-bold text-[#A8C700] text-[15px] xl4:text-[24px]">
                  Status
                </h6>
                <span className="font-bold text-[#727272] text-[19px] xl4:text-[32px]">
                  Alive
                </span>
              </div>

              <div className=" flex-col flex items-center gap-[10px] justify-between">
                <Image src={Human} alt="humano" width={90} height={90} />
                <h6 className="font-bold text-[#A8C700] text-[15px] xl4:text-[24px]">
                  Specie
                </h6>
                <span className="font-bold text-[#727272] text-[19px] xl4:text-[32px]">
                  Human
                </span>
              </div>

              <div className=" flex-col flex items-center justify-between gap-[10px]">
                <Image src={Male} alt="male" width={90} height={90} />
                <h6 className="font-bold text-[#A8C700] text-[15px] xl4:text-[24px]">
                  Gender
                </h6>
                <span className="font-bold text-[#727272] text-[19px] xl4:text-[32px]">
                  Male
                </span>
              </div>

              <div className=" flex-col flex items-center justify-between gap-[10px]">
                <Image src={Origin} alt="origem" width={90} height={90} />
                <h6 className="font-bold text-[#A8C700] text-[15px] xl4:text-[24px]">
                  Origin
                </h6>
                <span className="font-bold text-[#727272] text-[19px] xl4:text-[32px]">
                  Earth
                </span>
              </div>

              <div className=" flex-col flex items-center justify-between gap-[10px]">
                <Image
                  src={Location}
                  alt="localização"
                  width={80}
                  height={80}
                />
                <h6 className="font-bold text-[#A8C700] text-[15px] xl4:text-[24px]">
                  Location
                </h6>
                <span className="font-bold text-[#727272] text-[19px] xl4:text-[32px]">
                  Cidadel <br />
                  of Ricks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-[40px] text-[#404040] px-[228px] pb-[60px]">
          Outros Personagems
        </h1>
      </div>

      <div></div>
    </div>
  );
}
