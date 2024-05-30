import { getDiscoverMovies } from "@/lib/getMovies";
import HeroBanner from "@/components/heroBanner"

interface Props {
  id?: string;
  keywords?: string;
}

const Banner = async ({ id, keywords }: Props) => {
  const movies = await getDiscoverMovies(id, keywords);

  return <HeroBanner movies={movies}/>
};

export default Banner;
