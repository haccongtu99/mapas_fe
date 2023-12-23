import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import { Box, Flex, Text, TextInput, Textarea } from '@mantine/core'
import { useFocusWithin } from '@mantine/hooks'
import classes from './Input.module.scss'
import clsx from 'clsx'
import { RichtTextInput } from './RichInput'

export interface InputProps {
  title?: string
  field: string
  placeholder: string
  value?: string | number
  isImperative?: boolean
  canToggleActive?: boolean
  isActiveInput?: boolean
  typeInput?: string
  moreOptions?: React.ReactNode
  classNames?: string
  checkIsFocused?: (data: boolean) => void
  updateInput: (data: { value: string | number; field: any }) => void
}

type TypeInputProps = Pick<
  InputProps,
  | 'typeInput'
  | 'placeholder'
  | 'field'
  | 'value'
  | 'isActiveInput'
  | 'updateInput'
  | 'classNames'
  | 'isImperative'
>

export const TypeInput = ({
  typeInput,
  placeholder,
  field,
  isActiveInput,
  classNames,
  isImperative,
  value,
  updateInput,
  ...props
}: TypeInputProps) => {
  const [tempValue, setTempValue] = useState<string>((value ?? '').toString())

  const onUpdateInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateInput({
      field,
      value: tempValue
    })
  }

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTempValue(event.target.value)
  }

  const onUpdateRichText = (data: string) => {
    updateInput({
      field,
      value: data
    })
  }

  useEffect(() => {
    setTempValue(value as string)
  }, [value])

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
          onChange={onChange}
          onBlur={onUpdateInput}
          value={Number(value)}
          {...props}
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
          onChange={onChange}
          onBlur={onUpdateInput}
          value={tempValue}
          {...props}
        />
      )
    case 'richArea':
      return (
        <RichtTextInput
          field={field}
          value={tempValue}
          update={onUpdateRichText}
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
          onChange={onChange}
          onBlur={onUpdateInput}
          value={tempValue}
          {...props}
        />
      )
  }
}

const AppInput = ({
  title,
  field,
  placeholder = '',
  typeInput = 'text',
  isImperative = false,
  moreOptions,
  value = '',
  classNames,
  checkIsFocused,
  updateInput,
  ...props
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
        <Flex justify="space-between" align={'flex-end'} mb={10} mt={20}>
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
        value={value}
        updateInput={changeParentInput}
        {...props}
      />
      {moreOptions}
    </Box>
  )
}

export default AppInput
