import { useContext } from "react";
import { languageContext } from "./LanguageContext";

const translations = {
  en: "Hello, World!",
  es: "¡Hola, Mundo!",
  it: "Ciao, Mondo!",
};

export default function Hello() {
  const { language } = useContext(languageContext);
  return <h2 className="font-bold p-2 border">{translations[language]}</h2>;
}
