import Link from "next/link";
import { Eye, PanelLeft } from "lucide-react";
import { Button, Sheet, SheetContent, SheetTrigger } from "../ui";
import { ItemSidebarMobile } from "./itemSidebarMobile";

export const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Eye className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">e-Vista</span>
          </Link>
          <ItemSidebarMobile />
          {/* <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            Orders
          </Link> */}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
