import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// The prerendered HTML is shown until this runs, then replaced by the live app (in the visitor's language).
createRoot(document.getElementById("root")!).render(<App />);
