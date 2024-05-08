import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import US from "../public/countryflags/us.svg";
import Thaiwan from "../public/countryflags/taiwan.svg";
import China from "../public/countryflags/cn.svg";
import German from "../public/countryflags/de.svg";
import JP from "../public/countryflags/jp.svg";
import TH from "../public/countryflags/th.svg";
import IT from "../public/countryflags/it.svg";

const UsFlag = (
  <Image src={US} style={{ width: "25px", height: "25px" }} alt="US" />
);
const TaiwanFlag = (
  <Image src={Thaiwan} style={{ width: "25px", height: "20px" }} alt="CN" />
);
const ChinaFlag = (
  <Image src={China} style={{ width: "25px", height: "25px" }} alt="CN" />
);
const ItalyFlag = (
  <Image src={IT} style={{ width: "25px", height: "25px" }} alt="IT" />
);
const GermanFlag = (
  <Image src={German} style={{ width: "25px", height: "25px" }} alt="DE" />
);
const JapanFlag = (
  <Image src={JP} style={{ width: "25px", height: "25px" }} alt="JP" />
);
const ThaiFlag = (
  <Image src={TH} style={{ width: "25px", height: "25px" }} alt="TH" />
);

const languages = [
  { lang: "en", flag: UsFlag, text: "English" },
  { lang: "tw", flag: TaiwanFlag, text: "Taiwan" },
  { lang: "zh", flag: ChinaFlag, text: "Chinese" },
  { lang: "it", flag: ItalyFlag, text: "Italy" },
  { lang: "de", flag: GermanFlag, text: "German" },
  { lang: "jp", flag: JapanFlag, text: "Japanese" },
  { lang: "th", flag: ThaiFlag, text: "Thailand" },
];

const LanguageMenuItem = ({ theme }) => {
  const { t, i18n } = useTranslation("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  let found = languages.find((obj) => obj.lang === i18n.language);
  if (!found) {
    i18n.changeLanguage("en");
  }

  const currentLang = languages.find((obj) => obj.lang === i18n.language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative text-center justify-center w-auto ">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className=" border border-gray-20 px-3 py-2  flexCenter inline-flex w-80 items-center gap-2 space-x-1.5 text-sm font-medium text-gray-700 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" 
        >
          <div className="mr-5">{currentLang?.flag}</div>
          <div className="ml-5">{t(currentLang?.text)}</div>{" "}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute px-3 right-0 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <ul className="py-1">
            {languages
              .filter((obj) => obj.lang !== i18n.language)
              .map((obj) => (
                <li key={obj.lang} className="flex">
                  <button
                    className="w-full px-3 py-2 text-sm flex text-gray-900 hover:bg-gray-100"
                    onClick={() => changeLanguage(obj.lang)}
                  >
                    {obj.flag}
                    <span className="ml-2 text-black">{t(obj.text)}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageMenuItem;
