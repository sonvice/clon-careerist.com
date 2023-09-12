import React from "react";
import { reviews } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GrStar } from "react-icons/gr";
const SliderReview = () => {
  return (
    <div className="mt-xl">
      <Splide
        options={{
          classes: {
            arrow: "splide__arrow bg-gray-light",
            prev: "left-[-4em] splide__arrow--prev w-[3em] h-[3em]",
            next: "right-[-4em] w-[3em] h-[3em]",
          },
          
          rewind: true,
          gap: "clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)",
          perPage: 3,
          easing: "ease",
          speed: 500,
          mediaQuery: "min",
          breakpoints: {
            0: {
              perPage: 1,
              arrows:false,
              pagination:true,
            },
            768: {
              perPage: 2,
              arrows: true,
              pagination:false,
            },
            1024: {
              perPage: 3,
            },
          },
          type: "loop",
          pagination: false,
        }}
        aria-label="My Favorite Images"
      >
        {reviews.map((review) => (
          <SplideSlide
            className="dark:text-slate-50 p-lg rounded-lg flex flex-col"
            key={review.id}
          >
            <div className="flex gap-[.5rem]">
              <GrStar className="w-lg h-lg fill-primary" />
              <GrStar className="w-lg h-lg fill-primary" />
              <GrStar className="w-lg h-lg fill-primary" />
              <GrStar className="w-lg h-lg fill-primary" />
              <GrStar className="w-lg h-lg fill-primary" />
            </div>
            <p className="mt-sm">{review.review}</p>
            <div className="mt-auto pt-lg">
              <a href="#" className="text-primary font-semibold hover:underline">{review.url}</a>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SliderReview;
