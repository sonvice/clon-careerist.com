import {
  brandsGroup1,
  brandsGroup2,
  brandsGroup3,
  brandsGroup4,
  brandsGroup5,
  brandsGroup6,
} from "../assets/brands";
import { Parallax } from "react-scroll-parallax";

const Brands = () => {
  return (
    <div className=" mt-3xl">
      <div className="wrapper dark:text-slate-50">
        <h2 className="text-xl py-xl font-bold leading-tight uppercase max-w-[20ch]">
          Careerist Graduates Have Been Hired By:
        </h2>
      </div>

      <div className="dark:bg-gray-900">
        <Parallax translateX={[-40, -10]}>
          <div className="flex">
            {brandsGroup1.map((brand, index) => (
              <div className="min-w-[12rem]  md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
            {brandsGroup1.map((brand, index) => (
              <div className="min-w-[12rem] dark:bg-gray-light md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
          </div>
        </Parallax>
        <Parallax translateX={[0, -40]}>
          <div className="flex">
            {brandsGroup2.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
            {brandsGroup2.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
          </div>
        </Parallax>
        <Parallax translateX={[-40, -10]}>
          <div className="flex">
            {brandsGroup3.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
            {brandsGroup3.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
          </div>
        </Parallax>
        <Parallax translateX={[0, -40]}>
          <div className="flex">
            {brandsGroup4.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
            {brandsGroup4.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
          </div>
        </Parallax>
        <Parallax translateX={[-40, -10]}>
          <div className="flex">
            {brandsGroup5.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
            {brandsGroup5.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
          </div>
        </Parallax>
        <Parallax translateX={[0, -40]}>
          <div className="flex">
            {brandsGroup6.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
            {brandsGroup6.map((brand, index) => (
              <div className="min-w-[12rem] md:min-w-[18rem]" key={index}>
                <img src={brand} alt="brand" />
              </div>
            ))}
          </div>
        </Parallax>
        <p className="text-slate-400 wrapper text-left m-auto">
          *Our clients have found employment after taking Careerist´s trainings
          at the companies listed above. These companies do not in any way
          endorse, sponsor, approve, support our trainings and are not in any
          way affiliated with Careerist.com.
        </p>
      </div>
    </div>
  );
};

export default Brands;
