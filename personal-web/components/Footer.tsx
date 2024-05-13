import { useTranslations } from "next-intl";

import "styles/footer.scss";

import LocaleButtons from "./LocaleButtons";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer>
      <a href="https://www.facebook.com/lukas.stavaris.7">facebook</a>
      <a href="https://www.linkedin.com/in/lukas-stavaris">linkedin</a>
      <LocaleButtons />
    </footer>
  );
}
