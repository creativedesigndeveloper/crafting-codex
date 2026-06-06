import Category from "@/components/Category"
import wheatIcon from '@/assets/minecraft-items/wheat.png'
import redstoneIcon from '@/assets/minecraft-items/redstone.png'
import stoneBrickIcon from '@/assets/minecraft-items/stone_bricks.png'
import Header from "@/components/Header"
import DetailPanel from "@/components/DetailPanel"
import FarmList from "@/components/FarmList"
import type { Farm } from "@/types"
import { useState } from "react"

const Dashboard = () => {
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null)
  const id = crypto.randomUUID()

  const handleSelect = ({ farm }: { farm: Farm }) => {
    if (selectedFarm?.id === farm.id) {
      setSelectedFarm(null)
    } else {
      setSelectedFarm(farm)
    }
  }

  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="flex">
        <div className="bg-bg-primary">
          <h2 className="p-1 bg-bg-secondary border-border-primary border-r-2 text-text-secondary font-bold">Categories</h2>
          <div className="flex-1">
            <Category name="Farms" icon={wheatIcon} />
            <Category name="Redstone Builds" icon={redstoneIcon} />
            <Category name="Structures" icon={stoneBrickIcon} />
          </div>
        </div>
        <div className="w-full">
          <FarmList onSelect={handleSelect} currentFarm={selectedFarm} />
        </div>
        <div className="">
          <DetailPanel selectedFarm={selectedFarm} key={id} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard