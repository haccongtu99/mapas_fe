import { useEffect, useState } from 'react'
import { Image } from '@mantine/core'
import useSVG from '@/assets/svg/useSVG'

type Props = {
  name: string
  size: number | string
  width?: number | string
  height?: number | string
  disable?: boolean
  spin?: boolean
  color?: string
}

export const AppIcon = ({
  name,
  width,
  height,
  size,
  color = 'defaultColor',
  spin = false,
  disable = false
}: Props) => {
  const [iconPath, setIconPath] = useState<any>()
  const [viewBox, setViewBox] = useState<any>('0 0 24 24')
  const [widthIcon, setWidthIcon] = useState<string | number>(
    width ? width : size
  )
  const [heightIcon, setHeightIcon] = useState<string | number>(
    height ? height : size
  )
  const [svgComponent, setSvgComponent] = useState<any>()
  const [spanClass, setSpanClass] = useState<string>('')

  const loadSvgIcon = () => {
    const icons = useSVG
    console.log(icons, 'icons...')
    const icon = icons[name]
    if (!icon) {
      setSvgComponent(undefined)
      return
    }
    setSvgComponent(icon)
  }

  const loadSizeIcon = () => {
    const newViewBox = `0 0 ${width ? width : size} ${height ? height : size}`
    setViewBox(newViewBox)
  }

  const loadSpanClass = () => {
    const classValue: string[] = []
    if (disable) {
      classValue.push('disable')
    }

    if (svgComponent) {
      classValue.push('app-icon')
    }
    if (!classValue?.length) {
      return
    }
    const result = classValue.reduce((a, b) => a + ' ' + b)
    setSpanClass(result)
  }

  useEffect(() => {
    loadSvgIcon()
    loadSizeIcon()
    // loadIconPath();
    loadSpanClass()
  }, [])

  useEffect(() => {
    loadSpanClass()
  }, [svgComponent])

  return (
    <span
      role="image"
      className={spanClass}
      style={{
        width: `${widthIcon}px`,
        height: `${heightIcon}px`,
        display: 'inline-block'
      }}
    >
      {svgComponent ? (
        <Image
          src={svgComponent}
          width={`${widthIcon}`}
          height={`${heightIcon}`}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          fill={color}
          width={`${widthIcon}`}
          height={`${heightIcon}`}
        >
          <path d={iconPath}></path>
        </svg>
      )}
    </span>
  )
}
