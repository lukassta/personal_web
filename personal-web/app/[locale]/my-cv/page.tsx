import { useTranslations } from "next-intl";
import Image from "next/image";

import "styles/my_cv.scss";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <h1>CV</h1>
      <section>
        <hr className="thick" />
        <h2>{t("about-me")}</h2>
        <hr className="thin" />
        <p>{t("my_qualities")}</p>
      </section>
      <section>
        <hr className="thick" />
        <h2>{t("experience")}</h2>
        <hr className="thin" />
        <span>
          <span className="underline">2023 {t("summer")}</span>{" "}
          {t("nord_internship")}
        </span>
        <div className="hider">
          <p>{t("nord_internship_description")}</p>
        </div>
        <hr className="thin" />
        <span>
          <span className="underline">2023-{t("now")}</span> {t("soci")}
        </span>
        <div className="hider">
          <p>{t("soci_description")}</p>
        </div>
      </section>
      <section>
        <hr className="thick" />
        <h2>{t("education")}</h2>
        <hr className="thin" />
        <span>
          <span className="underline">2012-2020</span> {t("progymnasium")}
        </span>
        <hr className="thin" />
        <span>
          <span className="underline">2019-2020</span> {t("turing_intro")}
        </span>
        <hr className="thin" />
        <span>
          <span className="underline">2020-{t("now")}</span> {t("gymnasium")}
        </span>
        <hr className="thin" />
        <span>
          <span className="underline">2021-2022</span> {t("turing_cs50")}
        </span>
        <Image
          className="popup"
          src="/cs50_certificate.png"
          alt={t("progymnasium")}
          width={600}
          height={424}
        />
      </section>
      <section>
        <hr className="thick" />
        <h2>{t("interests")}</h2>
        <span>{t("drums")}</span>
        <hr className="thin" />
        <span>{t("d&d")}</span>
        <hr className="thin" />
        <span>{t("graphic_design")}</span>
        <hr className="thin" />
        <span>{t("penetration_testing")}</span>
        <hr className="thin" />
        <span>{t("philosophy")}</span>
        <hr className="thin" />
        <span>{t("programming")}</span>
        <hr className="thin" />
        <span>{t("psichology")}</span>
      </section>
      <section>
        <hr className="thick" />
        <h2>{t("contacts")}</h2>
        <span className="underline">Signal:</span> <span>@stavaris.11</span>
        <hr className="thin" />
        <span className="underline">Email:</span>{" "}
        <span>lukas.stavaris@gmail.com</span>
      </section>
    </>
  );
}
