import { useEffect, useState } from 'react'
import { ActionIcon, Stack, Image } from '@mantine/core'
import { TTempImageInfos } from '@/modules/projects/types'
import AppIcon from '@/components/AppIcon'
import AppUploadImage from '@/components/AppUploadImage'
import classes from './ProjectLayoutImages.module.scss'

export type TProjectLayoutImages = {
  layout: Array<number[]>
  images: string[]
  updateImages: (data: any) => void
}

const ProjectLayoutImages = ({
  layout,
  images,
  updateImages
}: TProjectLayoutImages) => {
  const [tempImages, setTempImages] = useState<string[]>([])
  const [isHovering, setIsHovering] = useState<boolean[]>(
    Array(images?.length).fill(false)
  )

  const onRemoveFile = (index: number) => {
    const newTempImages = [...(tempImages as string[])]
    newTempImages.splice(index, 1, '')
    setTempImages(newTempImages)
    // updateImages(newTempImages, index)
  }

  const onHovering = (index: number, status: boolean) => {
    isHovering[index] = status
    setIsHovering([...isHovering])
  }

  const onUpdateImages = (data: TTempImageInfos) => {
    console.log(data, 'data...')
  }

  useEffect(() => {
    if (!images?.length) {
      const maxLen = layout.flat().length
      setTempImages(Array(maxLen).fill(''))
      return
    }
    const newTempImages = [...tempImages]
    images.forEach(
      (image: string, index: number) => (newTempImages[index] = image)
    )
    setTempImages(newTempImages)
  }, [images])

  return (
    <Stack className={classes.layout__container} gap={40}>
      {layout.map((row: number[], index: number) => (
        <div key={index} className={classes.layout__images}>
          {row?.length &&
            row.map((imageIndexValue: number, childIndex: number) => (
              <div
                key={childIndex}
                className={classes.image__item}
                onMouseEnter={() => onHovering(imageIndexValue, true)}
                onMouseLeave={() => onHovering(imageIndexValue, false)}
              >
                {tempImages[imageIndexValue] ? (
                  <Image src={tempImages[imageIndexValue]} radius={10} />
                ) : (
                  <AppUploadImage
                    type="square"
                    allowMultiUpload={false}
                    hasPreview={true}
                    onChange={onUpdateImages}
                  />
                )}
                {isHovering[imageIndexValue] && tempImages[imageIndexValue] && (
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
      ))}
    </Stack>
  )
}

export default ProjectLayoutImages
