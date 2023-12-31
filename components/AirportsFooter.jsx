import Languages from "./Languages/Languages";
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "../i18n";

const AirportsFooter = () => {
  const { t, i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18nfile}>
      <button className="rounded-lg fixed bottom-12 left-12 bg-[#72b5df] border-white border-2 z-[34] px-3 py-3">
        <p>
          <a href="/contact" target="_blank" className="text-[#1e1d24]">contact us</a>
        </p>
      </button>
      <div className="bg-[#003d71] flex flex-col z-[34] pt-2 experience_footer fixed w-screen bottom-0">
        <div className="flex flex-row justify-between pl-14 pb-2 items-end">
          <div className="flex flex-row items-end">
            <p className="row_text_small">{t("footer-credits")}</p>
            <p className="row_text_small">{t("footer-privacy")}</p>
            <p className="row_text_small">{t("footer-cookies")}</p>
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

            <Languages />
          </div>
        </div>
      </div>
    </I18nextProvider>


  );
};

export default AirportsFooter;