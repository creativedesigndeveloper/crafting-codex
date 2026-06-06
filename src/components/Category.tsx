
interface CategoryProps {
  name: string,
  icon: string
}


const Category = ({ name, icon }: CategoryProps) => {
  return (
    <div className="bg-bg-secondary flex items-center w-80 border-border-primary border-2 h-50 sm:w-40 md:w-80">
      <img className="w-15 pl-3 mr-5 sm:w-10 md:w-15" src={icon} alt={name} />
      <h3 className="text-3xl sm:text-transparent md:text-3xl">{name}</h3>
    </div>
  )
}

export default Category