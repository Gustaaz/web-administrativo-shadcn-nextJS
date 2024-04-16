import {
  CardRecentSales,
  CardTransactions,
  CardValues,
  ListRecentSales,
  TableTransactions
} from '@/components/home'

export default function InicioPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CardValues
          icon="DollarSign"
          title="Total Revenue"
          value="$45,231.89"
          description="+20.1% from last month"
        />
        <CardValues
          icon="Users"
          title="Subscriptions"
          value="+2350"
          description="+180.1% from last month"
        />
        <CardValues
          icon="CreditCard"
          title="Sales"
          value="+12,234"
          description="+19% from last month"
        />
        <CardValues
          icon="Activity"
          title="Active Now"
          value="+573"
          description="+201 since last hour"
        />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <CardTransactions>
          <TableTransactions />
        </CardTransactions>
        <CardRecentSales>
          <ListRecentSales />
        </CardRecentSales>
      </div>
    </main>
  )
}
