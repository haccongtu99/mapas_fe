export type TImageInfos = { publicId: string; url: string }

export interface TProject {
  _id?: string
  id?: string
  name: string
  avatar?: File | any
  description?: string
  client: string
  images?: File[] | TTempImageInfos | any
}

export interface TProjectInfos extends Omit<TProject, 'avatar' | 'images'> {
  name: string
  client: string
  description: string
  avatar: TImageInfos
  _id?: string
  createdAt?: string
  updatedAt?: string
  images?: TImageInfos[]
}

export interface TProjectUpdate extends Omit<TProjectInfos, '_id' | '__v'> {
  id: string
}

export type TTempImageInfos = {
  file: any[]
  url: string[]
}
