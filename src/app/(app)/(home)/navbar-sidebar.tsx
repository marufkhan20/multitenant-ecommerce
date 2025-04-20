import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";

interface NavbarItems {
  href: string;
  children: React.ReactNode;
}

interface IProps {
  navbarItems: NavbarItems[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavbarSidebar = ({ navbarItems, open, onOpenChange }: IProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transform-none">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {navbarItems.map((item) => (
            <Link
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              href={item.href}
              key={item.href}
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              href="/sign-in"
              onClick={() => onOpenChange(false)}
            >
              Login
            </Link>
            <Link
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              href="/sign-up"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSidebar;
