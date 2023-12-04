import { ImageQuantityIcon } from '@/assets'
import { Flex } from '@mantine/core'
import { FC, useRef } from 'react'
import { TCardImage } from '../HomeProjectContainer'
import classes from './ProjectCard.module.scss'

type TProjectCardProps = TCardImage & {
  isMainImage?: boolean
}

const ProjectCard: FC<TProjectCardProps> = ({
  path,
  title,
  description,
  link,
  type,
  numberOfImages
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  // const handleMouseEnter = () => videoRef.current?.pause()
  // const handleMouseLeave = () => videoRef.current?.play()

  return (
    <div className={classes.container}>
      {link && (
        <a className={classes.link} href={link} target="_blank">
          {link}
        </a>
      )}
      {numberOfImages && (
        <div className={classes.numberImage}>
          <Flex gap={4} align="center" justify="center">
            <img src={ImageQuantityIcon} alt="number" /> +{numberOfImages}
          </Flex>
        </div>
      )}
      <a className={classes.badge} href={link} target="_blank">
        <h6 className={classes.title}>{title}</h6>
        <div className={classes.description}>{description}</div>
      </a>

      {type === 'video' ? (
        <video
          loop
          autoPlay
          playsInline
          muted
          ref={videoRef}
          className={classes.background}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <source src={path} type="video/mp4" />
        </video>
      ) : (
        <img src={path} alt={description} className={classes.background} />
      )}
    </div>
  )
}

export default ProjectCard
