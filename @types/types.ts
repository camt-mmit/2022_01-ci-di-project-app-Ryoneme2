export type Book = {
  isbn: string;
  title: string;
  author: string;
  price: number;
};

export type ResponseBook = {
  data: Book[] | undefined;
  msg: string;
};
