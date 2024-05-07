import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <section>
        <h2>{t("education")}</h2>
      </section>
      <section>
        <h2>{t("about-me")}</h2>
      </section>
      <section>
        <h2>{t("skills")}</h2>
      </section>
    </>
  );
}
