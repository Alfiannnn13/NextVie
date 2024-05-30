import Link from "next/link";
import Image from "next/image";
import Genre from "./genre";
import SearchInput from "./searchInput";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#b222229e] gap-4 md:gap-0 sticky z-50 top-0">
      {/* logo */}
      {/* <Image src="" alt="" width={120} height={100}/> */}
      <div className="">
        <Link href="/." className="text-white text-3xl font-bold">
          NexTVie
        </Link>
      </div>
      {/* dll */}
      <div className="text-white flex space-x-2 items-center">
        {/* genre */}
        <Genre />
        {/* cari */}
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
