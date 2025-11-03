import { IconRegistry } from "../icons/IconRegistry"

type IconProps = {
    name: keyof typeof IconRegistry
    size?: number
    color?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color }) => {
    const Component = IconRegistry[name] as React.ComponentType<React.SVGProps<SVGSVGElement>>
    if (!Component) return null
    return <Component width={size} height={size} fill={color} />
}
