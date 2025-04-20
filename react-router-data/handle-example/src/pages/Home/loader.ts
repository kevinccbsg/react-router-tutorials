import { getGenres } from "@/data/books";

export const loadGenres = async () => {
  const genres = await getGenres();
  return genres;
};

export default loadGenres;
