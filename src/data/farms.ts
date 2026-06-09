import wheat from '@/assets/minecraft-items/wheat.png'
import smoothStone from '@/assets/minecraft-items/smooth_stone.png'
import redstone from '@/assets/minecraft-items/redstone.png'
import dirt from '@/assets/minecraft-items/dirt_block.png'
import minecart from '@/assets/minecraft-items/minecart.png'
import waterBucket from '@/assets/minecraft-items/water_bucket.png'
import woodPlanks from '@/assets/minecraft-items/spruce_planks.png'
import slabs from '@/assets/minecraft-items/spruce_slab.png'
import composter from '@/assets/minecraft-items/Composter.png'
import shroomLight from '@/assets/minecraft-items/shroomlight.png'
import hopper from '@/assets/minecraft-items/hopper.png'
import rails from '@/assets/minecraft-items/rail.png'
import lightningRod from '@/assets/minecraft-items/lightning_rod.png'
import chest from '@/assets/minecraft-items/Minecraft Chest.png'
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
      {name: 'Dirt', quantity: 320, icon: dirt, id: id},
      {name: 'Minecart', quantity: 4, icon: minecart, id: id},
      {name: 'Wheat', quantity: 320, icon: wheat, id: id},
      {name: 'Water Bucket', quantity: 4, icon: waterBucket, id: id},
      {name: 'Wood Planks', quantity: 40, icon: woodPlanks, id: id},
      {name: 'Wood Slabs', quantity: 88, icon: slabs, id: id},
      {name: 'Composter', quantity: 4, icon: composter, id: id},
      {name: 'ShroomLight', quantity: 4, icon: shroomLight, id: id},
      {name: 'Hopper', quantity: 10, icon: hopper, id: id},
      {name: 'Rails', quantity: 4, icon: rails, id: id},
      {name: 'Lightning Rod', quantity: 1, icon: lightningRod, id: id},
      {name: 'Chest', quantity: 10, icon: chest, id: id},
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