// import { snakeCaseToUnderscore } from '@/utils/string-utils'
import { Box, Flex, Text, TextInput, Textarea } from '@mantine/core'
import { useFocusWithin } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './Input.module.scss'
import clsx from 'clsx'
import { translation } from '@/configs/i18n/i18n'

// const useStyles = createStyles(() => ({
//   '.text__title': {
//     fontWeight: 700,
//     fontSize: '14px',
//     lineHeight: '17px',
//     color: '#000000'
//   },
//   'text--imperative': {
//     fontStyle: 'italic',
//     fontWeight: 400,
//     fontSize: '12px',
//     lineHeight: '15px',
//     textAlign: 'right',
//     color: '#FE5F51'
//   },
//   input: {
//     background: '#f5f5f5',
//     borderRadius: '10px',
//     '&:focus': {
//       borderColor: '#000000'
//     }
//   },
//   inputText: {
//     height: '40px',
//     maxHeight: '80px',
//     fontSize: '12px'
//   },
//   inputArea: {
//     minHeight: '180px'
//   },
//   rightSection: {
//     display: 'none'
//   },
//   ['input--invalid']: {
//     maxHeight: '80px',
//     background: 'red'
//   }
// }))

export interface InputProps {
  title?: string
  field: string
  placeholder: string
  value?: string | number
  isImperative?: boolean
  canToggleActive?: boolean
  isActiveInput?: boolean
  typeInput?: string
  hiddenToggleIcon?: boolean
  moreOptions?: React.ReactNode
  classNames?: string
  checkIsFocused?: (data: boolean) => void
  updateInput: (data: { value: string | number; field: any }) => void
  setInvalidInput?: (data: boolean) => void
}

type TypeInputProps = Pick<
  InputProps,
  | 'typeInput'
  | 'placeholder'
  | 'field'
  | 'isActiveInput'
  | 'updateInput'
  | 'classNames'
  | 'isImperative'
  | 'setInvalidInput'
>

export const TypeInput = ({
  typeInput,
  placeholder,
  field,
  isActiveInput,
  classNames,
  isImperative,
  updateInput,
  setInvalidInput
}: TypeInputProps) => {
  const { t } = useTranslation()

  const onUpdateInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target
    updateInput({
      field,
      value
    })
  }

  switch (typeInput) {
    case 'number':
      return (
        <TextInput
          type="number"
          classNames={{
            input: clsx(classes.input, classes['input-text'], classNames)
          }}
          placeholder={placeholder}
          disabled={!isActiveInput}
          onBlur={onUpdateInput}
        />
      )
    case 'area':
      return (
        <Textarea
          classNames={{
            input: clsx(classes.input, classes['input-area'], classNames)
          }}
          placeholder={placeholder}
          disabled={!isActiveInput}
          onBlur={onUpdateInput}
        />
      )
    default:
      return (
        <TextInput
          classNames={{
            input: clsx(classes.input, classes['input-text'], classNames)
          }}
          placeholder={placeholder}
          disabled={!isActiveInput}
          onBlur={onUpdateInput}
        />
      )
  }
}

export const AppInput = ({
  title,
  field,
  placeholder = '',
  typeInput = 'text',
  isImperative = false,
  hiddenToggleIcon = false,
  moreOptions,
  value,
  classNames,
  checkIsFocused,
  updateInput,
  setInvalidInput
}: InputProps) => {
  const { t } = useTranslation()
  const { ref, focused } = useFocusWithin()
  const [isActive, setIsActive] = useState<boolean>(true)

  const changeParentInput = (data: { value: string | number; field: any }) => {
    updateInput(data)
  }

  useEffect(() => {
    checkIsFocused && checkIsFocused(focused)
  }, [focused])

  return (
    <Box ref={ref}>
      {title && (
        <Flex
          justify="space-between"
          align={'flex-end'}
          style={{ margin: '20px 0 10px 0' }}
        >
          <Text className={classes['text__title']}>{title}</Text>
          <Flex align={'center'}>
            {isImperative && (
              <Text className={classes['text--imperative']}>
                *{t(translation.common.requiredField)}
              </Text>
            )}
          </Flex>
        </Flex>
      )}
      <TypeInput
        typeInput={typeInput}
        placeholder={placeholder}
        field={field}
        isActiveInput={isActive}
        classNames={classNames}
        isImperative={isImperative}
        updateInput={changeParentInput}
        setInvalidInput={setInvalidInput}
      />
      {moreOptions}
    </Box>
  )
}
