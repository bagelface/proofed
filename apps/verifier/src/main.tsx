import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// The key lives in the fragment so the share service never receives it.
const key = window.location.hash.slice(1);

function App() {
  return (
    <main>
      <h1>Verify a Proofed credential</h1>
      <p>{key ? "Checking credential…" : "This link is missing its key."}</p>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
