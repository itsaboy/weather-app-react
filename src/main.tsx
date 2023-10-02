import { createRoot } from "react-dom/client";
import("preline");
const container = document.getElementById("root");
import App from "./App";

const root = createRoot(container!);
root.render(<App />);
