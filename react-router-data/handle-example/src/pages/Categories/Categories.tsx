import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import loadCategoryBooks from "./loader";
import { Link, useLoaderData } from "react-router";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const books = useLoaderData<typeof loadCategoryBooks>();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <Card key={book.id} className="shadow-md">
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">Author: {book.author}</p>
            <Button variant="link" asChild className="p-0">
              <Link to={`/sci-fi/${book.id}`}>
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Categories;