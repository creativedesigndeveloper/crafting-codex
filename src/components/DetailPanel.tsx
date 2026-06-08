import type { Farm } from "@/types"

interface DetailPanelProps {
  selectedFarm: Farm | null
}

const DetailPanel = ({ selectedFarm }: DetailPanelProps) => {
  if (!selectedFarm) {
    return (
      <div className="bg-bg-primary h-240 w-40 border-l-border-primary border-l-9 md:w-60 lg:w-80">
        <div className="bg-bg-secondary px-2 py-1 border-b-border-primary border-b-2">
          <h2 className="text-text-secondary font-bold">Farm Name</h2>
        </div>
        <p className="p-2 text-text-secondary">Select a farm for more details</p>
      </div>
    )
  }

  return (
    <div className="bg-bg-primary h-240 border-l-border-primary border-l-9 w-40 md:w-60 lg:w-80">
      <div>
        <div className="bg-bg-secondary px-2 py-1 border-b-border-primary border-b-2">
          <h1 className="text-text-secondary font-bold">{selectedFarm.name}</h1>

        </div>
        <p className="text-text-secondary p-2">{selectedFarm.description}</p>
      </div>
      <div>
        <h4>Materials</h4>
        <div>
          {selectedFarm.materials.map((m, index) => (
            <div className="flex justify-between mb-3 items-center pl-2 pt-2" key={index}>
              <img className="w-10" src={m.icon} alt={m.name} />
              <span className="text-text-quantity mr-5">x{m.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailPanel