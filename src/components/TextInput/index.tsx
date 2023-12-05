import {
  ActionIcon,
  Flex,
  TextInput as MantineTextInput,
  PasswordInput,
  PasswordInputProps,
  TextInputProps
} from '@mantine/core'
import clsx from 'clsx'
import classes from './TextInput.module.scss'

type TTextInputProps = TextInputProps &
  PasswordInputProps & {
    icon: React.ReactNode
    type: 'password' | 'text'
    classNames?: TextInputProps['classNames'] | PasswordInputProps['classNames']
  }

export const TextInput = ({ icon, type, ...props }: TTextInputProps) => {
  if (type === 'password') {
    return (
      <Flex className={classes['input-container']}>
        <ActionIcon variant="outline" color="#F2CCAE" className={classes.icon}>
          {icon}
        </ActionIcon>
        <PasswordInput
          classNames={{ input: classes.input, ...props.classNames }}
          {...(props as PasswordInputProps)}
        />
      </Flex>
    )
  }

  return (
    <Flex className={classes['input-container']}>
      <ActionIcon variant="outline" color="#F2CCAE" className={classes.icon}>
        {icon}
      </ActionIcon>
      <MantineTextInput
        classNames={{ input: clsx(classes.input), ...props.classNames }}
        {...(props as TextInputProps)}
      />
    </Flex>
  )
}
