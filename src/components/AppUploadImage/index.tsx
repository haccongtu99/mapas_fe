import { useEffect, useState } from 'react'
import { Box, Group, Stack, Text } from '@mantine/core'
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone'
import classes from './UploadImage.module.scss'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import { AppIcon } from '../AppIcon'
import { blobToBase64 } from '@/utils/string-utils'

type TAppUploadImage = {
  type?: string
  title?: string | any
  size?: string
  onChange: (data: any) => void
}

export const AppUploadImage = ({
  type = 'square',
  title,
  size,
  onChange,
  ...props
}: TAppUploadImage) => {
  const { t } = useTranslation()
  const acceptType = [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]
  const [sizeDropzone, setSizeDropzone] = useState<Record<string, string>>(
    type === 'square'
      ? { width: '300px', height: '300px' }
      : { minHeight: '300px' }
  )
  const [styleDropLabel, setStyleDropLabel] = useState<Record<string, string>>(
    type === 'square'
      ? { width: '180px', fontSize: '16px' }
      : { fontSize: '20px' }
  )
  const [fileStores, setFileStores] = useState<File[]>([])
  const [filePaths, setFilePaths] = useState<string[]>([])

  const createLocalUrl = (file: FileWithPath) => {
    if (!file) {
      return ''
    }
    return blobToBase64(file)
  }

  const onUploadFile = async (event: FileWithPath[]) => {
    const newFilesPath = [...filePaths]
    const newFiles = [...fileStores]
    console.log('onUploadFile...')
    newFilesPath.push((await createLocalUrl(event[0])) as string)
    newFiles.push(event[0] as FileWithPath)
  }

  const removeUploadFile = (data: any) => {
    const newFilesPath = [...filePaths]
    const newFiles = [...fileStores]
    // const removedFile = newFilesPath.findIndex((path: string) => path === '')
  }

  useEffect(() => {
    console.log(fileStores, filePaths, '')
  }, [fileStores, filePaths])

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
          onDrop={() => onUploadFile}
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
