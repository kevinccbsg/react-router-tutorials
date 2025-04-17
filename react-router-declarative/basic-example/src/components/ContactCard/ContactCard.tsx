import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarOff } from "lucide-react"
import useStore from "@/store/contacts";
import { useShallow } from "zustand/react/shallow";
import { deleteContact, updateFavoriteStatus } from "@/api/contacts";
import { useNavigate } from "react-router";

interface Contact {
  id: string;
  name: string;
  username: string;
  favorite: boolean;
  avatar?: string;
}

export default function ContactCard({ avatar, name, username, favorite, id }: Contact) {
  const { removeContact, markAsFavorite } = useStore(useShallow((state) => ({
    removeContact: state.removeContact,
    markAsFavorite: state.markAsFavorite,
  })));
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteContact(id);
    removeContact(id);
    navigate("/");
  };

  const handleFavorite = async () => {
    await updateFavoriteStatus(id, !favorite);
    markAsFavorite(id);
  };
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
          <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          <Button variant="ghost" onClick={handleFavorite}>
            {favorite ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
