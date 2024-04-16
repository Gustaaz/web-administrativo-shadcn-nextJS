"use client";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui";
import { Icon } from "../icon";
import { itemsMenus } from "@/ultls/itemnsMenus";
import { useActiveMenu } from "@/hooks";

export function ItemSidebar() {
  const { isActive } = useActiveMenu();

  const getActiveClass = (itemName: string) => {
    return isActive(itemName) && "bg-accent";
  };
  return (
    <>
      {itemsMenus.map((item) => (
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <Link
              href={item.href}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${getActiveClass(
                item.name
              )}`}
              aria-label={item.name}
            >
              <Icon name={item.icon} className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{item.name}</TooltipContent>
        </Tooltip>
      ))}
    </>
  );
}
