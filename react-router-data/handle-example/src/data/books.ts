interface Book {
  id: number;
  title: string;
  author: string;
}

interface Books {
  [genre: string]: Book[];
}

const books: Books = {
  'sci-fi': [
    {
      id: 1,
      title: "Dune",
      author: "Frank Herbert"
    },
    {
      id: 2,
      title: "Neuromancer",
      author: "William Gibson"
    },
    {
      id: 3,
      title: "Foundation",
      author: "Isaac Asimov"
    }
  ],
  fantasy: [
    {
      id: 1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien"
    },
    {
      id: 2,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling"
    },
    {
      id: 3,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss"
    }
  ]
};

export function getBooks(genre: string): Promise<Book[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (books[genre]) {
        resolve(books[genre]);
      } else {
        reject(new Error("Genre not found"));
      }
    }, 500);
  });
}

export function getBook(genre: string, id: number): Promise<Book> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books[genre]?.find((book) => book.id === id);
      if (book) {
        resolve(book);
      } else {
        reject(new Error("Book not found"));
      }
    }, 500);
  });
}

export function getGenres(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.keys(books));
    }, 500);
  });
}
