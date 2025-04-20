import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import loadGenres from "./pages/Home/loader";
import Categories from "./pages/Categories/Categories";
import Book from "./pages/Book/Book";
import loadBook from "./pages/Book/loader";
import loadCategoryBooks, { handleCategoryBooks } from "./pages/Categories/loader";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: loadGenres,
    element: <Home />,
    children: [
      {
        path: ":genre",
        id: "genre",
        Component: Categories,
        loader: loadCategoryBooks,
        handle: handleCategoryBooks,
      },
      {
        path: ":genre/:id",
        id: "book",
        handle: {
          title: "Book details",
        },
        Component: Book,
        loader: loadBook,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default AppRoutes;
