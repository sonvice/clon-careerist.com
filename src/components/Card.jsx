
const Card = ({ icon,title,description,time,salary }) => {
  return (
    <li className="bg-gray-light dark:bg-gray-800 dark:text-slate-50 dark:hover:bg-secondary group transition-colors ease-in-out duration-300  hover:bg-secondary  p-lg rounded-lg flex flex-col justify-center" key={title}>
    <a href="#">
    <div>
       <img src={icon} alt={title} />
     </div>
     <h3 className="group-hover:text-white text-md font-semibold mt-sm ">{title}</h3>
     <p className="mt-sm group-hover:text-white">{description}</p>
     <div className="flex justify-between mt-md group-hover:text-white">
       <span className="font-semibold">{time}</span>
       <span className="font-semibold">{salary}</span>
     </div>
    </a>
   </li>
  )
}

export default Card