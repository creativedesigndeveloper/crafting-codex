import wheat from '@/assets/minecraft-items/wheat.png'
import smoothStone from '@/assets/minecraft-items/smooth_stone.png'
import redstone from '@/assets/minecraft-items/redstone.png'
import type { Farm } from '@/types'
const id = crypto.randomUUID()

export const farms: Farm[] = [
  {
    id: 'wheat-farm',
    name: 'Wheat Farm',
    icon: wheat,
    category: 'Farms',
    difficulty: 'Easy',
    description: 'This is the first farm i am testing',
    materials: [
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id}
    ]
  },
  {
    id: 'redstone-farm',
    name: 'Redstone Farm',
    icon: redstone,
    category: 'Farms',
    difficulty: 'Medium',
    description: 'This is the first farm i am testing',
    materials: [
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id},
      {name: 'Smooth Stone', quantity: 128, icon: smoothStone, id: id}
    ]
  }
]