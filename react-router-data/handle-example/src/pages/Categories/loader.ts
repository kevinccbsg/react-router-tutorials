import { getBooks } from "@/data/books";
import { LoaderFunctionArgs, Params } from "react-router";

export const loadCategoryBooks = async ({ params }: LoaderFunctionArgs) => {
  const genre = params.genre as string;
  const books = await getBooks(genre);
  
  return books;
};

export const handleCategoryBooks = {
  title: (params: Params) => `Category ${params.genre}`,
  breadcrumbs: 'Categories',
};

export interface CategoryHandle {
  title: (params: Params) => string;
  breadcrumbs: string;
}

export default loadCategoryBooks;
