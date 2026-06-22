import type { Farm } from "@/types"
import { icons } from "@/iconRegistry"

interface FarmCardProps {
  farm: Farm
  isSelected: boolean,
  onSelect: ({ farm }: { farm: Farm }) => void
}

const difficultyStyles = {
  Easy: 'bg-bg-status-easy border-border-status-easy',
  Medium: 'bg-bg-status-medium border-border-status-medium',
  Hard: 'bg-bg-status-hard border-border-status-hard',
}

const FarmCard = ({ farm, isSelected, onSelect }: FarmCardProps) => {
  return (
    <div onClick={() => {
      onSelect({ farm })
    }
    } className={`${isSelected ? 'bg-bg-card-active border-border-card-active' : 'bg-bg-card border-border-primary'}  
    py-3 rounded-xl border-3 w-40 flex flex-col items-center justify-center text-center mx-auto md:mx-0 gap-5 cursor-pointer md:w-50`}>
      <img className="w-10 md:w-15" src={icons[farm.icon]} alt={farm.name} />
      <h4 className="text-xl md:text-2xl">{farm.name}</h4>
      <span className={`${difficultyStyles[farm.difficulty]} px-8 border-3 rounded-sm`}>{farm.difficulty}</span>
    </div>
  )
}

export default FarmCard