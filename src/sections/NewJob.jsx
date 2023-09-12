import Card from "../components/Card";
import { newJob } from "../constant";

const NewJob = () => {
  return (
    <div className="wrapper mt-3xl py-xl">
      <div className="flex flex-col dark:text-slate-50 md:flex-row justify-between gap-md mb-lg">
        <h2 className="text-xl font-barlow font-bold uppercase max-w-[14ch] leading-tight">
          meet your new job
        </h2>
        <p className="text-md max-w-[30ch] leading-snug">
          Find the right career for you, based on your experience and interests
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
        {newJob.map((job) => (
          <Card key={job.title} {...job}></Card>
        ))}
      </ul>
    </div>
  );
};

export default NewJob;
