'use client';
import Link from "next/link";
import { itemsMenus } from "@/ultls/itemnsMenus";
import { Icon } from "../icon";
import { useActiveMenu } from "@/hooks";

export function ItemSidebarMobile() {
  const { isActive } = useActiveMenu();

  const getActiveClass = (itemName: string) => {
    return isActive(itemName)
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground";
  };

  return (
    <>
      {itemsMenus.map((item) => (
        <Link key={item.name} href="#" className={`flex items-center gap-4 px-2.5 ${getActiveClass(item.name)}`} >
          <Icon name={item.icon} className="h-5 w-5" />
          <span className="ml-2">{item.name}</span>{" "}
        </Link>
      ))}
    </>
  );
}
