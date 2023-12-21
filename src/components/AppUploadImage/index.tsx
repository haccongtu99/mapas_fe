import { useEffect, useState } from 'react'
import { Box, Group, Stack, Text } from '@mantine/core'
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone'
import classes from './UploadImage.module.scss'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import AppIcon from '../AppIcon'
import { blobToBase64 } from '@/utils/string-utils'
import AppPreviewUploadImage from './AppPreviewUploadImage'

type TAppUploadImage = {
  type?: string
  title?: string | any
  size?: string
  allowMultiUpload?: boolean
  hasPreview?: boolean
  imagePreview?: string
  onChange: (data: any) => void
}

export const AppUploadImage = ({
  type = 'square',
  title,
  size,
  allowMultiUpload = false,
  hasPreview = false,
  imagePreview = undefined,
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

  const [fileStores, setFileStores] = useState<File[] | FileWithPath[]>([])
  const [filePaths, setFilePaths] = useState<string[]>([])

  const createLocalUrl = async (file: FileWithPath) => {
    if (!file) {
      return ''
    }
    return await blobToBase64(file)
  }

  const onUploadFile = async (event: FileWithPath[]) => {
    let newFilesPaths = [...filePaths]
    let newFiles = [...fileStores]
    if (allowMultiUpload) {
      const promises: Array<Promise<string>> = []
      event.forEach((file: FileWithPath) => promises.push(createLocalUrl(file)))
      const result = (await Promise.all(promises)) as string[]
      newFilesPaths = newFilesPaths.concat([...result])
      newFiles = newFiles.concat([...event])
    } else {
      newFilesPaths = [(await createLocalUrl(event[0])) as string]
      newFiles = [event[0] as FileWithPath]
    }
    setFilePaths(newFilesPaths)
    setFileStores(newFiles)
  }

  const removeUploadFile = () => {
    setFilePaths([])
    setFileStores([])
  }

  useEffect(() => {
    onChange({ file: fileStores, url: filePaths })
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
          multiple={allowMultiUpload}
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
          {((filePaths[filePaths.length - 1] && hasPreview) ||
            imagePreview) && (
            <AppPreviewUploadImage
              fileURL={filePaths[filePaths.length - 1] ?? imagePreview}
              removeFile={removeUploadFile}
            />
          )}
        </Dropzone>
      </Stack>
    </Box>
  )
}
