namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  price: Integer;
}

entity Orders {
  key ID: UUID;
  book: Association to Books;
  quantity: Integer;
  amount: Integer;
}
