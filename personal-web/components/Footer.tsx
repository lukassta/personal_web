import { useTranslations } from "next-intl";

import "styles/footer.scss";

export default function Footer() {
  const t = useTranslations("Footer");

  return <footer>Footer</footer>;
}
