import Image from "next/image";

import { useTranslations } from "next-intl";
import { Link } from "../navigation";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="header">
      <nav className="menu">
        <Link href="/my-cv">{t("my-cv")}</Link>
      </nav>
    </header>
  );
}
