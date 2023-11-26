/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertLanguageJsonToObject = <T extends Record<string, unknown>>(
  json: T,
  current?: string
): T =>
  Object.keys(json).reduce((convertedObj: any, key: string) => {
    const currentLookupKey = current ? `${current}.${key}` : key
    const value = json[key]

    if (typeof value === 'object' && value !== null) {
      convertedObj[key] = convertLanguageJsonToObject(
        value as Record<string, unknown>,
        currentLookupKey
      )
    } else {
      convertedObj[key] = currentLookupKey
    }

    return convertedObj
  }, {} as T)
