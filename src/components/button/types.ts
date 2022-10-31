import { ComponentPropsWithRef, ReactNode } from 'react'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'default' | 'outline' | 'text'
export type ButtonProps = ComponentPropsWithRef<'button'> & {
    size?: ButtonSize
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    variant?: ButtonVariant
    disableShadow?: boolean
}
