import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { instructors } from "../constant";
const Slider = () => {
  return (
    <div>
      <Splide
        hasTrack={false}
        options={{
          classes: {
            arrow: "splide__arrow bg-gray-light",
            prev: "left-[-4em] splide__arrow--prev w-[3em] h-[3em]",
            next: "right-[-4em] w-[3em] h-[3em]",
          },
          arrowPath: "",
          arrows: true,
          rewind: true,
          perPage: 3,
          easing: "ease",
          speed: 500,
          mediaQuery: "min",
          gap: "clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)",
          breakpoints: {
            0: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
            1280: {
              perPage: 3,
            },
          },
          type: "loop",
          pagination: false,
        }}
        aria-label="My Favorite Images"
      >
        <SplideTrack>
          {instructors.map((instructor) => (
            <SplideSlide
              className="group cursor-pointer bg-gray-light dark:bg-gray-800 dark:text-slate-50 overflow-hidden text-secondary hover:text-slate-50 hover:bg-secondary dark:hover:bg-secondary transition ease-in-out duration-300 p-lg rounded-lg "
              key={instructor.id}
            >
              <a href="#">
                
              <div>
                {instructor.tags.map((tag) => (
                  <span
                    className="p-[6px] dark:bg-gray-700 dark:text-slate-50 font-medium text-secondary bg-slate-50 rounded-lg mr-[4px]"
                    key={tag.company}
                  >
                    {tag.company}
                  </span>
                ))}
              </div>
              <h3 className="text-md font-medium mt-sm">{instructor.name}</h3>
              <p className="mt-sm">{instructor.description}</p>
              <div className="mt-sm">
                <img src={instructor.img} alt="Image 1" />
              </div>
              <div className="flex pt-lg">
                <div className="relative ml-[-5.25rem] group-hover:ml-[0] transition-[margin] ease-in-out duration-300">
                  <span className="ml-2xl"> Patrick Siebenthal</span>
                    <span className=" after:bg-slate-5 after:rotate-45 after:translate-y-[-50%] after:w-[1rem]   after:border-r after:border-t  after:h-[1rem] after:top-[1px] after:absolute after:right-[1px] group-hover:bg-gray-light left-[0] right-md absolute top-1/2 h-[1.5px]  bg-slate-50 translate-x-[-75%]"></span>
                  </div>

                </div>
              </a>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default Slider;
