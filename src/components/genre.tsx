import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Genres } from "../../type";


const Genre = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options:RequestInit={
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
          },
          next : {
            revalidate: 60 * 60 *24,
          },
    };

    const response = await fetch(url, options);
    const data = (await response.json()) as Genres;
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium">
            Genre <ChevronDown className="ml-1 size={20}"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Pilih Genre</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            {/* ambil data dd */}
            {data?.genres?.map((genre)=>(
                <DropdownMenuItem key={genre?.id}>
                    <Link href={`/genre/${genre?.id}?genre=${genre.name}`}>
                        {genre?.name}
                    </Link>
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Genre;
