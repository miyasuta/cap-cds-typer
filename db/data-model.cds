namespace my.bookshop;

entity Books {
  key ID : Integer @title: 'Book ID';
  title  : String @title: 'Title';
  stock  : Integer @title: 'Stock';
  price: Integer @title: 'Price'; //追加
}

//追加
entity Orders {
  key ID: UUID @title: 'Order ID';
  book: Association to Books;
  quantity: Integer @title: 'Quantity';
  amount: Integer @title: 'Amount';
}
