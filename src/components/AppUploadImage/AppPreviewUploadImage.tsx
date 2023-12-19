import { useEffect, useState } from 'react'
import { ActionIcon, Box, Image } from '@mantine/core'
import { AppIcon } from '../AppIcon'
import classes from './UploadImage.module.scss'
import clsx from 'clsx'

export const AppPreviewUploadImage = ({
  fileURL,
  className,
  removeFile
}: any) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const onRemoveFile = (event: any) => {
    event.stopPropagation()
    removeFile()
  }
  useEffect(() => {
    console.log(fileURL, 'fileURL..')
  }, [])

  return (
    <Box
      draggable={false}
      className={clsx(classes.image__preview, className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={event => event.stopPropagation()}
    >
      <div className={classes.image__wrapper}>
        <Image classNames={{ root: classes.image_detail }} src={fileURL} />
        {isHovering && (
          <ActionIcon
            className={classes.icon__remove}
            size={16}
            radius={'50%'}
            onClick={onRemoveFile}
          >
            <AppIcon name="close" />
          </ActionIcon>
        )}
      </div>
    </Box>
  )
}
