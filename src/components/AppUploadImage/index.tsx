import { useEffect, useState } from 'react'
import { Box, Group, Stack, Text } from '@mantine/core'
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone'
import classes from './UploadImage.module.scss'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import { AppIcon } from '../AppIcon'

export const AppUploadImage = ({ type, title, size, ...props }: any) => {
  const { t } = useTranslation()
  const acceptType = [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]
  const [sizeDropzone, setSizeDropzone] = useState<Record<string, string>>(
    type === 'square'
      ? {
          width: '300px',
          height: '300px'
        }
      : {
          minHeight: '300px'
        }
  )

  const [styleDropLabel, setStyleDropLabel] = useState<Record<string, string>>(
    type === 'square'
      ? {
          width: '180px',
          fontSize: '16px'
        }
      : {
          fontSize: '20px'
        }
  )

  const onUploadFile = () => {
    console.log('onUploadFile...')
  }

  return (
    <Box className={classes.container}>
      <Stack gap={11}>
        <Text className={classes.title}>{title}</Text>
        <Dropzone
          style={sizeDropzone}
          classNames={{
            root: classes.add__zone,
            inner: classes['add__zone-inner']
          }}
          accept={acceptType}
          onDrop={onUploadFile}
        >
          <Group
            justify="center"
            align="center"
            classNames={{ root: classes.group__zone }}
          >
            <Dropzone.Idle>
              <AppIcon name="image-upload" size={50} />
            </Dropzone.Idle>
            <Text style={styleDropLabel} className={classes.label}>
              {t(translation.common.dragDropLabel)}
            </Text>
          </Group>
        </Dropzone>
      </Stack>
    </Box>
  )
}
