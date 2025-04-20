import { Outlet, useLoaderData } from "react-router"
import Sidebar from "@/components/Sidebar/Sidebar"
import loadGenres from "./loader"
import { useTitleMatch } from "./useTitleMatch";

export default function Home() {
  const genres = useLoaderData<typeof loadGenres>();
  const title = useTitleMatch();
  
  return (
    <div className="h-screen grid grid-cols-[300px_1fr]">
      {/* Sidebar */}
      <div className="border-r p-4 flex flex-col gap-4">
        <Sidebar pages={genres.map(genre => ({
          id: genre,
          name: genre,
          link: genre,
        }))} />
      </div>
      {/* Detail View */}
      <div className="p-8">
        {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}
        <Outlet />
      </div>
    </div>
  )
}
