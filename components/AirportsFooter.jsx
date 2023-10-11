import Languages from "./Languages/Languages";
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "../i18n";

const AirportsFooter = () => {
  const { t, i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18nfile}>
      <div className="bg-[#003d71] flex flex-col z-[34] pt-2 experience_footer sticky w-screen bottom-0">
        <div className="flex flex-row justify-between pl-14 pb-2 items-end">
          <div className="flex flex-row items-end">
            <h3 className="row_text_small">{t("footer-credits")}</h3>
            <h3 className="row_text_small">{t("footer-privacy")}</h3>
            <h3 className="row_text_small">{t("footer-cookies")}</h3>
          </div>
          <div className="flex flex-row pr-12 right-5 items-end">
            <p>
              <a href="https://www.facebook.com/profile.php?id=100063771316825" target="_blank" className="row_text_big">Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com/matec.sas/" target="_blank" className="row_text_big">Instagram</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/company/78115973/admin/feed/posts/" target="_blank" className="row_text_big">Linkedin</a>
            </p>
            <p>
              <a href="https://www.youtube.com/channel/UCL1EYtcfz4JvHg6FqUvvfTQ" target="_blank" className="row_text_big pr-10">Youtube</a>
            </p>

            <Languages/>
          </div>
        </div>
      </div>
    </I18nextProvider>


  );
};

export default AirportsFooter;