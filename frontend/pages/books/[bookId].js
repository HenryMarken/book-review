//third-party imports
import React from "react";
import { useRouter } from "next/router";

//local imports
import NavBar from "../../components/NavBar";

const Books = () => {
  const user = {
    id: "123",
    name: "Henry",
    email: "henrymarken@hotmail.com",
    password: "123",
  };

  const books = [
    {
      id: "1",
      title: "the body keeps the score",
      description:
        "book about trauma and how people handle it going into the biology of the brain and how we function from trauma",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594559067i/18693771.jpg",
      review: "really good book",
      rating: 8,
    },
    {
      id: "2",
      title: "atomic habits",
      description: "goes over creating good habits",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
      review: "really good book",
      rating: 10,
    },
  ];


  const router = useRouter();
  const { bookId } = router.query;
  const bookToFind = books.find(book => book.id === bookId);
  if(bookToFind){
    console.log('Found Book')
  }
  else{
    console.log('Something Went Wrong')
  }


  return (
    <React.Fragment>
      <NavBar />
      <div className="bg-white text-black font-playfair text-center">
      <div className="flex flex-col justify-center items-center p-10 border mx-10 rounded-lg ">
          <p className="font-bold underline">{bookToFind.title}</p>
          <p>{bookToFind.description}</p>
          <p>Rating: {bookToFind.rating}</p>
          <p>{user.name} Review: {bookToFind.review}</p>
          <img src={bookToFind.image} alt={bookToFind.title} className="w-64 h-auto" />
        </div>

        <div className="mx-10 my-5 border text-left">
            <p className="font-bold underline">Henry Marken</p>
            <p>Rating:5</p>
            <p>Review:The book was okay</p>
            
        </div>
        </div>


    </React.Fragment>
  );
};

export default Books;
