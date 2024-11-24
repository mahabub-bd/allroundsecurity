import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { aboutItems } from "@/constants/data";
import { AboutItem } from "@/types/types";
import React from "react";

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={`block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

const AboutMenu = () => {
  return (
    <ul className="grid w-full md:w-[200px] gap-2 p-3">
      {aboutItems.map(({ id, title, href }: AboutItem) => (
        <ListItem key={id} title={title} href={href} />
      ))}
    </ul>
  );
};

export default AboutMenu;
