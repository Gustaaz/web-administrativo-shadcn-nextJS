import { PlusCircle } from 'lucide-react'
import { Button } from '../ui'

export function NewScheduleButton() {
  return (
    <Button size="sm" className="h-8 gap-1">
      <PlusCircle className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Add Product
      </span>
    </Button>
  )
}
