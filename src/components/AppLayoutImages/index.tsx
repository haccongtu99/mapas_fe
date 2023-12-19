import { Box, Stack, Image } from '@mantine/core'
import { useEffect, useState } from 'react'
import { LoginBackground } from '@/assets'

type TAppLayoutImages = {
  state: number
  gap?: number
  layoutInfos?: any
  children?: React.ReactNode
}

// Can write recursive, low priority
export const AppLayoutImages = ({
  state = 1,
  layoutInfos,
  children,
  gap = 40
}: TAppLayoutImages) => {
  const infos = [[1], [1, 2], [3, 1, 2]]
  const [layoutStyles, setLayoutStyles] = useState<Record<string, any>>()
  // temp data
  const getStyleByLayoutInfos = (countGrid: number) => {
    const style = 'auto '.repeat(countGrid).trim()
    return {
      display: 'grid',
      gridTemplateColumns: 'auto '.repeat(countGrid).trim(),
      gap: '10px'
    }
  }
  return (
    <Stack style={layoutStyles} gap={gap}>
      {infos.map((stack: any, index: number) => (
        <Stack key={index} style={{ background: 'red' }} gap={10}>
          {stack.map((childStack: any, childIndex: number) => (
            <Box key={childIndex} style={getStyleByLayoutInfos(childStack)}>
              {Array(childStack)
                .fill(0)
                .map(() => (
                  <div
                    key={`${index}:${childIndex}:${childStack}:${Math.floor(
                      Math.random() * 10
                    )}`}
                  >
                    <Image src={LoginBackground} />
                  </div>
                ))}
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}
