import './button.scss'

import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

import { ButtonProps } from './types'

function Button(
    {
        children,
        leftIcon,
        className,
        rightIcon,
        size = 'md',
        disableShadow,
        variant = 'default',
        ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
) {
    return (
        <button
            {...props}
            ref={ref}
            className={cn('btn', `btn--${variant}`, `btn--${size}`, { 'btn--with-shadow': !disableShadow }, className)}
        >
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </button>
    )
}

export default forwardRef(Button)
