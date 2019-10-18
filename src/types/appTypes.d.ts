export interface IBook {
  id: string
  title: string
  ISBN: number
  author: string
  editor: string
  year: number
  language: string
  weightInGrams: number
  dimensions: IDimension
}

export interface IDimension {
  height: number
  width: number
  depth: number
}
