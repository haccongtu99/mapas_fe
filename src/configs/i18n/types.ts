/* eslint-disable @typescript-eslint/no-explicit-any */
export type TConvertedObject<T> = {
  [P in keyof T]: T[P] extends string ? string : TConvertedObject<T[P]>
} & {
  [P: string]: any
}

export type TTranslationJson = typeof import('../../../public/locales/en.json')
