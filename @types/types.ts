export type Book = {
  isbn: string;
  title: string;
  author: string;
  price: number | string;
};

export type ResponseBook = {
  data: Book[] | undefined;
  msg: string;
};
