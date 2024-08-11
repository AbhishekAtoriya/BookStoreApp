import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import list from "../../public/list.json"; // Adjust the path as necessary
import Cards from './Cards';
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const  getBook = async () => {
try {
   const res = await axios.get("https://bookstoreapp-backend-9oa7.onrender.com");
   console.log(res.data);
   const data = res.data.filter((data) => data.category === "Free");
   setBook(data);
} catch(error){
  console.log(error);
}
    };
    getBook();
  },[]);
  // Correct the spelling of "category"
  //const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pd-2">Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantiom veritatis alias periatur ad dolor repudiandae eligendi corporis nulla non suscipit, isure neque earrum?</p>
      </div>

      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
