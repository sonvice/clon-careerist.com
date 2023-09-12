import { cardFeedBack } from "../constant"

const CardThank = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-lg">
        {cardFeedBack.map((card)=>(
            <div key={card.name} className="bg-gray-light dark:bg-gray-800 dark:text-slate-50 p-lg rounded-lg">

                <div className="flex items-center gap-lg">
                    <div><img className="rounded-full" src={card.img} width={90} height={90}  alt="" /></div>
                    <h3 className="text-md xl:text-lg whitespace-nowrap">{card.name}</h3>
                </div>
                <p className="mt-base">{card.message}</p>
            </div>
            
        ))}
    </div>
  )
}

export default CardThank