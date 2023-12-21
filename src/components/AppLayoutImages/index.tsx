import { Stack, Image, ActionIcon } from '@mantine/core'
import { useEffect, useState } from 'react'
import classes from './LayoutImages.module.scss'
import AppIcon from '../AppIcon'
import { DEFAULT_LAYOUT } from '@/constants'

type TAppLayoutImages = {
  gap?: number
  images: string[]
  layout?: any
  children?: React.ReactNode
  updateImages: (data: string[], index: number) => void
}

const useParseImagesToLayoutConfigs = (
  images: string[],
  layoutConfigs: Array<number[]>
): any => {
  const result: any = []
  let count = 0
  layoutConfigs.forEach(parent => {
    const parseParentArray: Array<number[] | string[]> = []
    parent.forEach(child => {
      let tempCount = 0
      const tempArray: string[] = []
      while (count < images.length && tempCount < child) {
        tempArray.push(images[count])
        count += 1
        tempCount += 1
      }
      parseParentArray.push(tempArray)
    })
    result.push(parseParentArray)
  })
  return result
}

const AppLayoutImages = ({
  images,
  children,
  gap = 40,
  layout = [],
  updateImages
}: TAppLayoutImages) => {
  // const layoutConfigs = useState<any>(DEFAULT_LAYOUT)
  // Temp fix static c
  const layoutConfigs = [[0], [1], [2, 4, 5]]
  const [tempImages, setTempImages] = useState<string[]>()
  const [isHovering, setIsHovering] = useState<boolean[]>(
    Array(images?.length).fill(false)
  )

  const onRemoveFile = (index: number) => {
    const newTempImages = [...(tempImages as string[])]
    newTempImages.splice(index, 1)
    setTempImages(newTempImages)
    updateImages(newTempImages, index)
  }

  const onHovering = (index: number, status: boolean) => {
    isHovering[index] = status
    setIsHovering([...isHovering])
  }

  useEffect(() => {
    console.log(images, 'images...')
    setTempImages(images)
  }, [images])

  return (
    // <Stack style={layoutStyles} gap={gap}>
    //   {parseInfos.map((stack: any, index: number) => (
    //     <Stack key={index} style={{ background: '#f5f5f5' }} gap={10}>
    //       {stack.map((childStack: any, childIndex: number) => (
    //         <Box key={childIndex} style={getStyleByLayoutInfos()}>
    //           { childStack.map((src: string, index: number) => (
    //             <Image src={src} key={`${src}:${index}:${Math.floor(Math.random() * 100)}`} fit='cover' />
    //           ))}
    //         </Box>
    //       ))}
    //     </Stack>
    //   ))}
    // </Stack>
    <Stack className={classes.layout__container} gap={gap}>
      {tempImages?.length ? (
        layoutConfigs.map((row: number[], index: number) => (
          <div key={index} className={classes.layout__images}>
            {row?.length &&
              row.map((imageIndexValue: number, childIndex: number) => (
                <div
                  key={childIndex}
                  className={classes.image__item}
                  onMouseEnter={() => onHovering(imageIndexValue, true)}
                  onMouseLeave={() => onHovering(imageIndexValue, false)}
                >
                  {tempImages[imageIndexValue] && (
                    <Image src={tempImages[imageIndexValue]} />
                  )}
                  {isHovering[imageIndexValue] && (
                    <ActionIcon
                      className={classes.icon__remove}
                      size={16}
                      radius={'50%'}
                      onClick={() => onRemoveFile(imageIndexValue)}
                    >
                      <AppIcon name="close" />
                    </ActionIcon>
                  )}
                </div>
              ))}
          </div>
        ))
      ) : (
        <div></div>
      )}
    </Stack>
  )
}

export default AppLayoutImages
