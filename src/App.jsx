import { useState } from "react";
import Container from "./Container";
import Hello from "./Hello";
import { languageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    // <Container title={<h1 className="py-3">La Mia Applicazione</h1>}>
    //   <h2 className="py-4 text-blue-600">Ciao a tutti</h2>
    //   <p className="text-blue-600">Questa è la mia applicazione</p>
    // </Container>

    <languageContext.Provider value={{ language, setLanguage }}>
      <div className="flex flex-col justify-center items-center gap-2 p-10">
        <h1 className="font-bold text-2xl">Seleziona Lingua</h1>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="border p-2 rounded-lg bg-emerald-300"
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
        </select>
        <Hello />
      </div>
    </languageContext.Provider>
  );
}

export default App;
