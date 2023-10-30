import React from 'react'
import {useEffect} from 'react'
import CategoryItem from './CategoryItem'
import useEmblaCarousel from 'embla-carousel-react'
import { products } from '../../data/data'
import { Link } from "react-router-dom";


const Categories = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        speed: 10,
        dragFree: true,
        align: 'start'
      });

      useEffect(() => {
        emblaApi && emblaApi.on('select', () => {});
      }, []);
  
    return (
      <section className=" mt-12 md:mt-20  sm:mx-auto flex flex-col">
        <h2 className="text-center md:self-start md:ml-10 text-xl md:text-2xl font-semibold text-gray-700 ">
          Categories
        </h2>
        <div ref={emblaRef}>
          <div className=" flex  w-full h-full my-14">
            {products.map((category) => (
              <Link to={`/products/${category.id}`}>
                <CategoryItem
                  key={category.id}
                  title={category.title}
                  imgSrc={category.imgSrc}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  
}

export default Categories



          