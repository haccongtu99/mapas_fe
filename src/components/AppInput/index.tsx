import { Box, Flex, Text, TextInput, Textarea } from '@mantine/core'
import { useFocusWithin } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './Input.module.scss'
import clsx from 'clsx'
import { translation } from '@/configs/i18n/i18n'

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
  | 'value'
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
  value,
  updateInput
}: TypeInputProps) => {
  const { t } = useTranslation()
  const [tempValue, setTempValue] = useState<string>('')

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
          // defaultValue={'123'}
          // value={value}
          onChange={onChange}
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
          // defaultValue={'123'}
          // value={value}
          onChange={onChange}
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
          // defaultValue={'123'}
          // value={value}
          onChange={onChange}
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
  value = '',
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
        value={value}
        updateInput={changeParentInput}
        setInvalidInput={setInvalidInput}
      />
      {moreOptions}
    </Box>
  )
}
