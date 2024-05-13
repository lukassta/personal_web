import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section>
      <h1>404: {t("description")}</h1>
    </section>
  );
}
