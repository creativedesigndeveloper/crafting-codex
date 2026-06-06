import type { Farm } from "@/types"
import { farms } from "@/data/farms"
import FarmCard from "./FarmCard"

interface FarmListProps {
  currentFarm: Farm | null
  onSelect: ({ farm }: { farm: Farm }) => void
}

const FarmList = ({ currentFarm, onSelect }: FarmListProps) => {

  return (
    <div>
      <div className=" p-1 bg-bg-primary border-b-border-primary border-b-2">
        <span className="text-text-secondary pl-2">Farms - select a build to see resources</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3  2xl:grid-cols-4">
        {farms.map((farm) => (
          <FarmCard key={farm.id} farm={farm} isSelected={currentFarm?.id === farm.id} onSelect={onSelect} />
        ))}

      </div>
    </div>
  )
}

export default FarmList