import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <section>
        <h1>Lukas Stavaris</h1>
      </section>
    </>
  );
}
