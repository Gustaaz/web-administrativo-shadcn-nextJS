import { icons } from 'lucide-react'

type ItemsMenu = {
  name: string
  href: string
  icon: keyof typeof icons
}

export const itemsMenus: ItemsMenu[] = [
  {
    name: 'Inicio',
    href: '/inicio',
    icon: 'Home'
  },
  {
    name: 'Meus Agendamentos',
    href: '/meus-agendamentos',
    icon: 'Calendar'
  }
]
