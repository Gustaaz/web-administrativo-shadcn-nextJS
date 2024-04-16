import { icons } from 'lucide-react'
import { Icon } from '../icon'
import { CardContent, CardHeader, Card as CardShadcn, CardTitle } from '../ui'

type CardProps = {
  title: string
  value: string
  description: string
  icon: keyof typeof icons
}

export function CardValues({ title, value, description, icon }: CardProps) {
  return (
    <CardShadcn x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon name={icon} className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </CardShadcn>
  )
}
