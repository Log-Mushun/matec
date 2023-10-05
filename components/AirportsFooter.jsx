import Languages from "./Languages/Languages";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../i18n";

const AirportsFooter = () => {
  const { t, i18n } = useTranslation();

    return (
      <I18nextProvider i18n={i18nfile}>
       <div className="bg-transparent flex flex-col z-30 experience_footer fixed bottom-1 " style={{zIndex:1000}}>
  <div className="flex flex-row justify-between pl-14 pb-5 items-end">
    <div className="flex flex-row items-end">
      <h3 className="row_text_small">{t("footer-credits")}</h3>
      <h3 className="row_text_small">{t("footer-privacy")}</h3>
      <h3 className="row_text_small">{t("footer-cookies")}</h3>
    </div>
    <div className="flex flex-row pr-12 fixed right-5 items-end">
      <h2 className="row_text_big">Facebook</h2>
      <h2 className="row_text_big pr-4">Instagram</h2>
      <Languages />
    </div>
  </div>
</div>
</I18nextProvider>


    );
};

export default AirportsFooter;