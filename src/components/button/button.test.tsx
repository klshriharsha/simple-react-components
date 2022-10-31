import { render, screen, within } from '@testing-library/react'
import { createRef } from 'react'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

import Button from './button'

describe('button', () => {
    it('renders a button correctly', () => {
        render(<Button>click me</Button>)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('renders a button with left and right icons', () => {
        render(
            <Button
                leftIcon={<RiArrowLeftLine aria-label="arrow-left" />}
                rightIcon={<RiArrowRightLine aria-label="arrow-right" />}
            >
                click me
            </Button>,
        )

        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
        expect(within(btn).getByLabelText(/arrow-left/i)).toBeInTheDocument()
        expect(within(btn).getByLabelText(/arrow-right/i)).toBeInTheDocument()
    })

    it('sets button attributes correctly', () => {
        render(
            <Button disabled type="submit">
                click me
            </Button>,
        )

        const btn = screen.getByRole('button')
        expect(btn).toHaveAttribute('disabled', '')
        expect(btn).toHaveAttribute('type', 'submit')
    })

    it('renders a button without shadow', () => {
        render(<Button disableShadow>click me</Button>)

        expect(screen.getByRole('button')).not.toHaveClass('btn--with-shadow')
    })

    it('renders a button with the given variant', () => {
        render(<Button variant="danger">click me</Button>)

        expect(screen.getByRole('button')).toHaveClass('btn--danger')
    })

    it('renders a button with the given size', () => {
        render(<Button size="lg">click me</Button>)

        expect(screen.getByRole('button')).toHaveClass('btn--lg')
    })

    it('forwards provided ref correctly', () => {
        const ref = createRef<HTMLButtonElement>()
        render(<Button ref={ref}>click me</Button>)

        expect(ref.current?.nodeName).toBe('BUTTON')
        expect(ref.current).toHaveClass('btn')
    })
})
