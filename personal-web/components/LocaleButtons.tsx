"use client";

import Image from "next/image";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "../navigation";
import { locales } from "../navigation";
import { useLocale } from "next-intl";

import "styles/header.scss";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function changeLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <>
      {locales.map(
        (cur, index) =>
          cur != locale && (
            <button
              key={cur}
              className="locale-button"
              onClick={() => changeLocale(cur)}
            >
              {cur}
            </button>
          )
      )}
    </>
  );
}
