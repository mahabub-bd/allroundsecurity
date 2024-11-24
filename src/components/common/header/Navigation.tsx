import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/constants/data";
import Link from "next/link";
import AboutMenu from "./AboutMenu";
import ServicesMenu from "./ServicesMenu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavigationDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((navItem) => (
          <NavigationMenuItem key={navItem.id}>
            {navItem.subMenu ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`px-4 py-2 font-medium transition-colors hover:bg-gray-100`}
                  >
                    {navItem.text}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {navItem.text === "Services" ? (
                    <ServicesMenu />
                  ) : navItem.text === "About Us" ? (
                    <AboutMenu />
                  ) : null}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={navItem.path} passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navItem.text}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
