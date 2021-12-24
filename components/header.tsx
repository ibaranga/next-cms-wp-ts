import Link from "next/link";
import { ApiGeneralSettings } from "../lib/api-types";

export interface HeaderProps {
  generalSettings: ApiGeneralSettings;
  title?: string;
}

export default function Header({ generalSettings, title }: HeaderProps) {
  return (
    <div className="sticky shadow-xs max-w-full px-5 md:px-3 py-3 md:py-1 top-0 z-10  md:text-4xl flex flex-row bg-accent-1 dark:bg-gray-700 justify-between">
      <div className="flex flex-col text-2xl justify-around">
        <Link href="/">
          <a className="hover:underline font-bold tracking-tight md:tracking-tighter leading-tight">
            {generalSettings?.title}
          </a>
        </Link>
        <span className="text-lg h-0 md:h-auto invisible md:visible">
          {generalSettings?.description}
        </span>
      </div>
      <div className="flex flex-col justify-around">
        {title && <span className="text-lg mx-3">{title}</span>}
      </div>
    </div>
  );
}
