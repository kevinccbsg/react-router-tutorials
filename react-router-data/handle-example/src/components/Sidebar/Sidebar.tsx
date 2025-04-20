import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "react-router"

interface Pages {
  id: string;
  name: string;
  link: string;
}

export default function Sidebar({ pages }: { pages: Pages[] }) {
  return (
    <>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 mt-4">
          {pages.map(page => (
            <Button
              key={page.id}
              className="justify-start"
              asChild
              variant="outline"
            >
              <Link to={page.link} viewTransition>
                {page.name}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </>
  )
}
