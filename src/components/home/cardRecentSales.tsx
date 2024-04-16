import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui";

type CardRecentSalesProps = {
    children: React.ReactNode
}

export function CardRecentSales({ children }: CardRecentSalesProps) {
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {children}
      </CardContent>
    </Card>
  );
}
