import { ComponentMeta, ComponentStory } from '@storybook/react'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

import Button from '../components/button'

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        disableShadow: { control: 'boolean' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <Button {...args}>{children}</Button>
        <Button {...args} disabled>
            Disabled {children}
        </Button>
        <Button {...args} leftIcon={<RiArrowLeftLine />}>
            Back
        </Button>
        <Button {...args} rightIcon={<RiArrowRightLine />}>
            Next
        </Button>
        <Button {...args} size="lg">
            Large {children}
        </Button>
        <Button {...args} size="sm">
            Small {children}
        </Button>
    </div>
)
const params = { controls: { exclude: ['variant'] } }

export const Default = Template.bind({})
Default.args = {
    children: 'Default',
}
Default.parameters = params

export const Outline = Template.bind({})
Outline.args = {
    variant: 'outline',
    children: 'Outline',
}
Outline.parameters = params

export const Text = Template.bind({})
Text.args = {
    variant: 'text',
    children: 'Text',
}
Text.parameters = params

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    children: 'Primary',
}
Primary.parameters = params

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary',
}
Secondary.parameters = params

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    children: 'Danger',
}
Danger.parameters = params
