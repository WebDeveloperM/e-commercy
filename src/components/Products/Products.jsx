import React from "react";
import { Img1, Img2, Img3, Img4 } from "../../assets/women"
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Ethnic",
    rating: 4.5,
    color: "red",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Ethnic",
    rating: 4.3,
    color: "pink",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Women Ethnic",
    rating: 4.3,
    color: "pink",
    aosDelay: "800",
  }
];

const Products = () => {
  return (
    <div className="mt-12 mb-10">
      <div className="container">
        {/* Headr section */}

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top selling Products</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            libero deserunt culpa, accusamus modi eveniet. Lorem, ipsum dolor.
          </p>
        </div>
      </div>
      {/* body section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {/* card section */}
          {ProductsData.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3">
              <img src={data.img} alt=""
                className="h-[220px] w-[150px] object-cover rounded-md" />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1 ">
                  <FaStar className="text-yellow-400">
                  </FaStar>
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>

          ))}
        </div>
        {/* view all button */}
        <div data-aos="fade-up" className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md ">View All Button</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
