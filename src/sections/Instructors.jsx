import Slider from "../components/Slider";

const Instructors = () => {
  return (
    <div className="py-xl">
      <div className="flex flex-col dark:text-slate-50 md:flex-row justify-between gap-md mb-lg py-md">
        <h2 className="text-xl font-bold uppercase max-w-[16ch] leading-tight">
          meet your instructors
        </h2>
        <p className="text-md max-w-[30ch] leading-snug">
          ​Learn from industry experts with decades of big-tech experience.
          We’re ready to help you get hired!
        </p>
      </div>
      <Slider></Slider>
    </div>
  );
};

export default Instructors;
