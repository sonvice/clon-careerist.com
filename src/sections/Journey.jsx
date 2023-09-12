import { steps } from "../assets/images";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { journey } from "../constant";
import { useState } from "react";

const Journey = () => {
  const [indexJourney, setIndexJourney] = useState(0);
  const { title, description,id } = journey[indexJourney];

  const next = (e) => {
    if (journey.length - 1 > indexJourney) {
      setIndexJourney(indexJourney + 1);
      return;
    }
    return;
  };
  const prev = () => {
    if (indexJourney == 0) {
      return;
    }
    setIndexJourney(indexJourney - 1);
    return
  };

  return (
    <div className="wrapper gap-xl flex-col md:flex-row flex justify-between items-center py-3xl text-white">
      <div className="flex-1">
        <h2 className="text-xl font-barlow uppercase max-w-[16ch] font-bold leading-tight">
          the careerist journey
        </h2>
        <div className="mt-2xl flex-1">
          <img className="object-contain" width={600} height={400} src={steps} alt="steps" />
        </div>
      </div>
      <div className="max-w-md flex-1">
        <div className="flex gap-md flex-col">
          <div className="flex gap-md items-center">
            <span className="bg-primary w-lg h-lg text-base font-semibold rounded-full flex justify-center items-center">
              {id}
            </span>
            <h3 className="text-md">{title}</h3>
          </div>
          <p className="mt-sm">
            {description}
          </p>
        </div>
        <div className=" splide__arrows mt-xl flex gap-base">
          <button
            onClick={prev}
            className="group hover:border-primary w-xl h-xl rounded-full flex justify-center items-center border-2"
          >
            <BsArrowLeftShort className="group group-hover:fill-primary"></BsArrowLeftShort>
          </button>
          <button
           disabled={false}
            onClick={next}
            className="group hover:border-primary w-xl h-xl rounded-full flex justify-center items-center border-2"
          >
            <BsArrowRightShort className="group group-hover:fill-primary"></BsArrowRightShort>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journey;
