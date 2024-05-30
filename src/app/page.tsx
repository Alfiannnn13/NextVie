import Banner from "@/components/Banner";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home () {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <Banner/>
    </main>
  )
}