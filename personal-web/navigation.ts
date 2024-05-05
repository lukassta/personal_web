import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "lt"] as const;
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",
  "/my-cv": {
    en: "/my-cv",
    lt: "/mano-cv",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
