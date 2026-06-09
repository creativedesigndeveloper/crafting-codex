
interface CategoryProps {
  name: string,
  icon: string
}


const Category = ({ name, icon }: CategoryProps) => {
  return (
    <div className="bg-bg-secondary flex flex-col flex-wrap p-5 items-center w-full border-border-primary border-2 md:h-50 md:w-80 md:flex-row 2xl:h-65 md:p-0">
      <img className="w-10 items-center pl-3 mr-5 md:w-15 " src={icon} alt={name} />
      <h3 className="hidden md:block md:text-2xl lg:text-3xl">{name}</h3>
    </div>
  )
}

export default Category