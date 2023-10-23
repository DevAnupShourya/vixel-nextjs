
// ? External Components
import { usePathname } from "next/navigation";
// ? Local Components
import NavItems from "@src/components/buttons/NavItems";
import { AuthMenuLinks } from "@src/utils/Constants/Links";

export default function MobileNavPrivate() {
    const path = usePathname();
  return (
    <nav className="max-sm:w-full max-md:w-11/12 w-10/12 rounded-md shadow-2xl max-md:px-1 px-5 py-4 f-row bg-main-text-default justify-around">
      {AuthMenuLinks.map((item) => {
            return (
              <NavItems
                key={item.name}
                icon={item.icon}
                name={item.name}
                url={item.href}
                active={path === item.href ? true : false}
              />
            );
          })}
    </nav>
  );
}
