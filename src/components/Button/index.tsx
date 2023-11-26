import clsx from 'clsx'
import React, { forwardRef } from 'react'
import classes from './Button.module.scss'
import { TVariantProps } from '@/types/global'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode | JSX.Element
  variant?: TVariantProps
  onClick?: () => void
  active?: boolean
}

type TRef = HTMLButtonElement

const Button = forwardRef<TRef, IButtonProps>(
  (
    {
      children,
      icon,
      variant = 'primary',
      onClick,
      active = false,
      className = '',
      disabled
    },
    ref
  ) => {
    return (
      <button
        className={clsx(
          classes.container,
          classes[variant],
          active && classes.active,
          className
        )}
        onClick={onClick}
        ref={ref}
        disabled={disabled}
      >
        <div className={classes.content}>
          {children}
          <div className={classes.icon}>{icon}</div>
        </div>
      </button>
    )
  }
)

export default Button
