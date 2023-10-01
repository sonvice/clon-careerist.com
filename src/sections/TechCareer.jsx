import { how } from "../assets/images";
import CardTech from "../components/CardTech";
import { techCareer } from "../constant";

const TechCareer = () => {
  return (
    <div className="mb-3xl">
      <div className="flex dark:text-slate-50  flex-col md:flex-row justify-between gap-xl items-center pt-3xl pb-xl">
        <div className="basis-[40%] z-10">
          <h2 className="text-xl font-barlow max-lg:text-md font-bold uppercase max-w-[14ch] leading-tight">
            tech career for all
          </h2>
          <p className="text-base max-lg:text-base mt-lg">
            Get the career services you need to land a job, because education is
            just one piece of the job search puzzle
          </p>
        </div>
        <div className="basis-[45%] relative">
          <div className="absolute max-md:dark:hidden bg-gray-light dark:bg-gray-800 w-[55vw] h-full bottom-[0] right-full"></div>
          <img
            className=" lg:ml-auto "
            src={how}
            width={800}
            height={600}
            alt="chica"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
        {techCareer.map((career) => (
          <CardTech key={career.title} {...career}></CardTech>
        ))}
      </div>
    </div>
  );
};

export default TechCareer;
