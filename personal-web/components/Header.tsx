import NameLogo from "components/NameLogo";

import { useTranslations } from "next-intl";
import { Link } from "../navigation";

import "styles/header.scss";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header>
      <Link href="/">
        <NameLogo />
      </Link>
      <nav>
        <Link href="/my-cv">{t("my_cv")}</Link>
      </nav>
    </header>
  );
}
