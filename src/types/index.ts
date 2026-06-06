
export interface Farm {
  id: string,
  name: string,
  icon: string,
  category: string,
  description: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  materials: Material[],
}

export interface Material {
  name: string,
  quantity: number,
  icon: string,
  id: string
}