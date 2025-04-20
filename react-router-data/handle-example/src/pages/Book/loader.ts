import { getBook } from "@/data/books";
import { LoaderFunctionArgs } from "react-router";

export const loadBook = async ({ params }: LoaderFunctionArgs) => {
  const genre = params.genre as string;
  const id = Number(params.id as string);
  const book = await getBook(genre, id);
  return book;
}

export default loadBook;