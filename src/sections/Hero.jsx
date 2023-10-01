import { iconTitle, iconTopdec } from "../assets/icons"
import { topPhoto } from "../assets/images"

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl dark:text-slate-50">
      <div className="basis-2/3">
        <h1 className="text-2xl font-bold font-barlow uppercase leading-[1.2]">Grow your <br />
        <img className="h-2xl inline-block"  src={iconTitle} alt="Icon title" />
        <span className="md:text-stroke dark:text- align-middle">carrer</span>
        <br />
        in tech
        </h1>
        <p className="text-base max-w-3xl mt-lg">Ready for your next chapter? Join our immersive programs and get on the fast track to a high-paying tech job</p>
      </div>
      <div className="lg:ml-auto relative">
      <span className="absolute dark:bg-gray-900 top-[0] left-[0] inline-block w-2xl h-2xl bg-white"></span>
        <img className="h-full object-cover" src={topPhoto} width={500} height={500} alt="Top Photo" />
        <span className="absolute dark:bg-gray-900 bottom-[0] right-[0] inline-block w-2xl h-2xl bg-white"></span>
        <div className="absolute top-base right-[0] translate-x-1/2 w-2xl">
          <img src={iconTopdec} alt="Top Dec" />
        </div>
      </div>
    </div>
  )
}

export default Hero