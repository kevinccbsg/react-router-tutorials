import { useMatches } from "react-router";
import { CategoryHandle } from "../Categories/loader";

export const useTitleMatch = () => {
  const matches = useMatches();
  const categoriesPage = matches.find(match => match.id === "genre");
  const bookPage = matches.find(match => match.id === "book");
  let pageTitle = '';
  if (categoriesPage) {
    pageTitle = (categoriesPage.handle as CategoryHandle).title(categoriesPage.params);
  } else if (bookPage) {
    pageTitle = (bookPage.handle as { title: string }).title;
  }
  return pageTitle;
};