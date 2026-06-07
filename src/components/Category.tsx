
interface CategoryProps {
  name: string,
  icon: string
}


const Category = ({ name, icon }: CategoryProps) => {
  return (
    <div className="bg-bg-secondary flex items-center w-40 border-border-primary border-2 h-50 md:w-80">
      <img className="w-10 items-center pl-3 mr-5 md:w-15 " src={icon} alt={name} />
      <h3 className="hidden md:block md:text-2xl lg:text-3xl">{name}</h3>
    </div>
  )
}

export default Category