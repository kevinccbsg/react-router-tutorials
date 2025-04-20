import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLoaderData } from 'react-router';
import loadBook from './loader';

const Book: React.FC = () => {
  const book = useLoaderData<typeof loadBook>();

  return (
    <div className="min-h-screen">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{book.title}</CardTitle>
          <CardDescription className="text-lg text-gray-600">by {book.author}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Book;