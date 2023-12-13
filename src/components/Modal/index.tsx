import { Modal as MantineModal, ModalProps } from '@mantine/core'
import clsx from 'clsx'
import { FC } from 'react'
import classes from './Modal.module.scss'

const Modal: FC<ModalProps> = ({
  opened,
  children,
  title,
  content,
  className,
  onClose,
  ...props
}) => {
  return (
    <MantineModal
      onClose={onClose}
      opened={opened}
      shadow="md"
      centered
      size={1120}
      title={title}
      keepMounted
      transitionProps={{
        transition: 'pop',
        duration: 300
      }}
      classNames={{
        body: clsx(classes.modal, className),
        root: classes.root,
        overlay: classes.overlay,
        title: classes.title,
        header: classes.header
      }}
      yOffset={100}
      {...props}
    >
      {children}
    </MantineModal>
  )
}

export default Modal
