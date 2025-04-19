import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarOff } from "lucide-react"
import { Form } from "react-router";

interface Contact {
  id: string;
  name: string;
  username: string;
  favorite: boolean;
  avatar?: string;
}

export default function ContactCard({ avatar, name, username, favorite, id }: Contact) {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Avatar className="w-32 h-32">
          <AvatarImage src={avatar || undefined} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-bold">{name}</h2>
          {username && (
            <p className="text-sm text-muted-foreground">{username}</p>
          )}
        </div>
        <div className="flex gap-2">
          <Form method="DELETE">
            <input type="hidden" name="id" value={id} />
            <Button type="submit" variant="destructive">Delete</Button>
          </Form>
          <Form method="PATCH">
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="favorite" value={String(!favorite)} />
            <Button type="submit" variant="ghost">
              {favorite ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
            </Button>
          </Form>
        </div>
      </CardContent>
    </Card>
  )
}
