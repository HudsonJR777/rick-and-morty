import Image from "next/image";

import Logo from "./../assets/logo.svg";
<link rel="icon" href="/favicon.ico" sizes="40" />;

export default function Header() {
  return (
    <header className="bg-[#CFE071] w-full h-[100px] xl4:h-[140px] flex items-center ">
      <div className="w-full container">
        <Image src={Logo} alt="logo" className="w-[297px]" />
      </div>
    </header>
  );
}
