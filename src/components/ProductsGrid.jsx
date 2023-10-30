import React from 'react'
import {  products } from '../../data/data';
import ProductCard from './ProductCard';

const ProductsGrid = () => {
  return (
    <section className="flex flex-col justify-start items-start mt-5 mx-5   ">
      <h2 className="text-lg font-semibold text-gray-700">products:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3  justify-start items-start gap-2 mt-5">
        {products.map((product) =>
          product.products.map((subProduct) => (
            <ProductCard
              key={subProduct.title}
              title={subProduct.title}
              imgSrc={subProduct.imgSrc}
              category={subProduct.category}
              parentProductId={product.id}
              productId={subProduct.id}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductsGrid


