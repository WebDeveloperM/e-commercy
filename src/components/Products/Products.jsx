import React from "react";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    raiting: 5.0,
    color: "blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Ethnic",
    raiting: 5.0,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Ethnic",
    raiting: 4.5,
    color: "red",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Ethnic",
    raiting: 4.3,
    color: "pink",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Women Ethnic",
    raiting: 5.0,
    color: "yelloe",
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div className="mt-12 mb-10">
      <div className="container">
        {/* Headr section */}

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top selling Products</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-gray-400">
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
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
