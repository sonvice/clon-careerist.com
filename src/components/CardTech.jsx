
const CardTech = ({ icon,title, description }) => {
  return (
    
        <div className="dark:text-slate-50">
            <div><img src={icon} alt={title} /></div>
            <h3 className="text-md font-semibold mt-sm">{title}</h3>
            <p className="mt-sm">{description}</p>
        </div>
    
  )
}

export default CardTech