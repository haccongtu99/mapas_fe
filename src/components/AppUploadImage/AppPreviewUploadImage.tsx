import { useState } from 'react'
import { ActionIcon, Box, Image } from '@mantine/core'
import AppIcon from '../AppIcon'
import clsx from 'clsx'
import classes from './UploadImage.module.scss'

const AppPreviewUploadImage = ({ fileURL, className, removeFile }: any) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const onRemoveFile = (event: any) => {
    event.stopPropagation()
    removeFile()
  }

  return (
    <Box
      draggable={false}
      className={clsx(classes.image__preview, className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={event => event.stopPropagation()}
    >
      <div className={classes.image__wrapper}>
        {fileURL && (
          <Image
            classNames={{ root: classes.image_detail }}
            src={fileURL}
            radius={10}
          />
        )}
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

export default AppPreviewUploadImage
