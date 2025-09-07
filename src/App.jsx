import { useEffect, useState } from "react";
import { initialFacts } from "./data/randomFacts";
import { generateRandomData } from "./utils/generateRandomData";

import Container from "./components/Container";
import GenerateFactButton from "./components/GenerateFactButton";
import Heading from "./components/Heading";
import Fact from "./components/Fact";
import ToggleDarkModeButton from "./components/ToggleDarkModeButton";
import FooterIcons from "./components/FooterIcons";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [facts, setFacts] = useState(generateRandomData(initialFacts));
  const [count, setCount] = useState(1);

  const [isDark, setIsDark] = useState(() => {
    const storedValue = localStorage.getItem("darkMode");
    return storedValue ? JSON.parse(storedValue) : true;
  });

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  function handleRandomFact() {
    setCount((c) => c + 1);

    if (count % 5 === 0 && count > 0) toast(`You have read ${count} facts.`);

    const currentFact = facts[0].fact;

    // CHECKS IF DATA IS DISPLAYED NOT UNDEFINED, A LITTLE BUG CHECK ON THE DATA
    // currentFact === undefined ? console.log("SHEEEEIT") : null;

    if (facts[1].length === 0) {
      let newFacts = generateRandomData(initialFacts);

      if (newFacts[0].fact === currentFact) {
        while (newFacts[0].fact === currentFact) {
          newFacts = generateRandomData(initialFacts);
        }
      }

      setFacts(newFacts);
      return;
    }
    const newFacts = generateRandomData(facts);
    setFacts(newFacts);
  }

  return (
    <Container>
      <ToggleDarkModeButton isDark={isDark} setIsDark={setIsDark} />
      <Heading />
      <Fact>{facts[0].fact}</Fact>
      <GenerateFactButton onClick={handleRandomFact} />
      <FooterIcons />
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 3000,
          style: {
            background: isDark ? "#fff" : "#0e0e0e",
            color: isDark ? "#0e0e0e" : "#fff",
            fontSize: "1.4rem",
            fontWeight: 400,
            width: "20rem",
            position: "relative",
            top: "1rem",
            left: "rem",
          },
        }}
      />
    </Container>
  );
}

export default App;
