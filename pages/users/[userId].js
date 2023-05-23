//third-party
import React from "react";
import Link from 'next/link';

//local
import NavBar from "../../components/NavBar";



const Library = () => {
    const user = {
      id: "123",
      name: "Henry",
      email: "henrymarken@hotmail.com",
      password: "123"
    };
  
    const books = [
      {
        id: '1',
        title: 'the body keeps the score',
        description: 'book about trauma and how people handle it going into the biology of the brain and how we function from trauma',
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594559067i/18693771.jpg',
        review: 'really good book',
        rating: 8
      },
      {
        id: '2',
        title: 'atomic habits',
        description: 'goes over creating good habits',
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
        review: 'really good book',
        rating: 10
      }
    ];
  
    const bookElements = [];
  
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
        
      const path = `/books/${book.id}`
      bookElements.push(
        <div key={i} className="flex flex-col justify-center items-center p-10 border mx-10 rounded-lg ">
          <p className="font-bold underline">{book.title}</p>
          <Link href={path}><img src={book.image} alt={book.title} className="w-64 h-auto" /></Link>
        </div>
      );
    }
  
    return (
      <React.Fragment>
        <NavBar />
        <div className="bg-white text-black text-center font-playfair">
          <p>Welcome to {user.name}'s Library</p>
        </div>
        <div className="text-black bg-white font-playfair text-center space-y-5">{bookElements}</div>
      </React.Fragment>
    );
  };
  
export default Library;
