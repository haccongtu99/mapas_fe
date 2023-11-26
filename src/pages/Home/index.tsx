import { FaceBookLogo } from '@/assets'
import CustomButton from '@/components/Button'
import ProjectSection from '@/modules/home/components/ProjectSection'
import { Button, Flex, Stack, Text, Title } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'

export const HomePage = () => {
  return (
    <Stack mt={100}>
      <Flex justify="flex-start" gap={20}>
        <Button color="primary" variant="outline">
          Button
        </Button>
        <Button color="primary" variant="filled">
          Button
        </Button>
        <Button color="primary" variant="subtle">
          Button
        </Button>
        <Button color="primary" variant="gradient">
          Button
        </Button>
      </Flex>
      <Title size="h1">Heading 1</Title>
      <Title size="h2">Heading 2</Title>
      <Title size="h3">Heading 3</Title>
      <Title size="h4">Heading 4</Title>
      <Title size="h5">Heading 5</Title>
      <Title size="h5">Heading 5</Title>
      <Title size="h6">Heading 6</Title>
      <Title size="h6" c="primary">
        Heading with custom color
      </Title>
      <Text size="xs">Text xs</Text>
      <Text size="sm">Text sm</Text>
      <Text size="md">Text md</Text>
      <Text size="lg">Text lg</Text>
      <Text size="xl">Text xl</Text>
      <Text size="xxl">Text xxl</Text>
      <Text size="xxxl">Text xxxl</Text>

      <Title size="h6" c="primary">
        Custom logo with svgr
      </Title>
      <FaceBookLogo />
      <Title size="h6" c="primary">
        Logo from lib
      </Title>
      <IconArrowLeft />

      <CustomButton variant="outline">Custom button outline</CustomButton>
      <CustomButton variant="primary">Custom button filled</CustomButton>
      <CustomButton variant="default">Custom button default</CustomButton>

      <ProjectSection />
    </Stack>
  )
}
