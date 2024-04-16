import { ModeToggle } from "../ui";
import { Breadcrumb } from "./breadcrumb";
import { MenuUser } from "./menuUser";
import { SidebarMobile } from "../sidebarMobile/sidebarMobile";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarMobile />
      <Breadcrumb />
      <div className="flex-1 flex items-center justify-end gap-4">
        <ModeToggle />
        <MenuUser />
      </div>
    </header>
  );
}
