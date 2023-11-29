export type TProjectImages = { mainImage: string[]; subImage: string[] }

export type TProject = {
  name: string
  avatar?: string
  description?: string
  client: string
  images: TProjectImages[]
}
