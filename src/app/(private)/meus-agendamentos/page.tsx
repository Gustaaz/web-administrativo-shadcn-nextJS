import {
  CardContainer,
  ExportButton,
  FilterButtons,
  NewScheduleButton,
  TableSchedules,
} from "@/components/my-schedules";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

export default function MeusAgendamentosPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <FilterButtons />
            <ExportButton />
            <NewScheduleButton />
          </div>
        </div>
        <TabsContent value="all">
          <CardContainer>
            <TableSchedules />
          </CardContainer>
        </TabsContent>
      </Tabs>
    </main>
  );
}
