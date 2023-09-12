import CardThank from "../components/CardThank";
import SliderReview from "../components/SliderReview";

const Thank = () => {
  return (
    <div className="wrapper mt-3xl">
      <h2 className="text-xl font-barlow dark:text-slate-50 font-bold uppercase py-xl">Thank You!</h2>
      <CardThank></CardThank>
      <div>
        <SliderReview></SliderReview>
      </div>
    </div>
  );
};

export default Thank;
