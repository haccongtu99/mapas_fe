import clsx from 'clsx'
import { FC } from 'react'
import ProjectCard from '../ProjectCard'
import classes from './ProjectContainer.module.scss'

export type TCardImage = {
  path: string
  title?: string
  description: string
  link?: string
  type?: 'image' | 'video'
  numberOfImages?: number
}

type TProjectContainerProps = {
  subImage: TCardImage[]
  mainImage: TCardImage
  direction?: 'left' | 'right'
}

const ProjectContainer: FC<TProjectContainerProps> = ({
  subImage,
  mainImage,
  direction = 'left'
}) => {
  return (
    <div className={clsx(classes.container, classes[direction])}>
      <div className={clsx(classes.main)}>
        <ProjectCard
          type={mainImage.type}
          path={mainImage.path}
          description={mainImage.description}
          title={mainImage.title}
          link={mainImage.link}
          numberOfImages={mainImage.numberOfImages}
          isMainImage
        />
      </div>

      <div className={clsx(classes.sub, classes.top)}>
        <ProjectCard
          type={subImage[0].type}
          path={subImage[0].path}
          description={subImage[0].description}
          title={subImage[0].title}
          link={subImage[0].link}
          numberOfImages={subImage[0].numberOfImages}
        />
      </div>

      <div className={clsx(classes.sub, classes.bottom)}>
        <ProjectCard
          type={subImage[1].type}
          path={subImage[1].path}
          description={subImage[1].description}
          title={subImage[1].title}
          link={subImage[1].link}
          numberOfImages={subImage[1].numberOfImages}
        />
      </div>
    </div>
  )
}

export default ProjectContainer
