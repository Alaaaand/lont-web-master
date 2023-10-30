import React, { useState } from "react"; // Import the custom CSS for smooth animations
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, imgSrc, category, parentProductId }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/products/${parentProductId}`);
  };
  return (
    <article
      className=" py-5 px-3  bg-gray-100/80 rounded my-2 flex flex-col items-center justify-center w-full h-full "
      onClick={handleCardClick}
    >
      <div className="w-full h-32 ">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className=" self-start mt-5  flex flex-col items-start gap-1 justify-start ">
        <p className="text-gray-500/80 text-sm w-full">{category}</p>
        <h3 className="text-gray-700 font-semibold">{title}</h3>
      </div>
    </article>
  );
};

export default ProductCard;
