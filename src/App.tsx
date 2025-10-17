import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { theme } from "./theme";

// Simple theme object with 2 properties

// Styled component that uses the theme
const ThemedDiv = styled.div(({ theme }) => {
  return `
      background-color: ${theme.primary};
      color: ${theme.text};
      padding: 10px;
      border-radius: 8px;
      font-size: 16px;
      transition: background-color 0.25s;
      &:hover {
        background-color: ${theme.secondary};
      }
    `;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ThemedDiv>
        <h1>Vite + React</h1>
      </ThemedDiv>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
