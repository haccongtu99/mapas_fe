import { AppShellHeader, Button, Flex, Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import classes from './Header.module.scss'

export const Header = () => {
  return (
    <AppShellHeader>
      <Flex px={20} className={classes.container}>
        <Flex className={classes['left-section']}>
          <Input
            leftSection={<IconSearch size={20} color="black" />}
            leftSectionWidth={40}
            placeholder="Search"
            size="sm"
            classNames={{ input: classes.input }}
          />
          <Button
            color="gray.3"
            classNames={{ root: classes.button, label: classes.label }}
          >
            Tìm kiếm
          </Button>
        </Flex>
      </Flex>
    </AppShellHeader>
  )
}
