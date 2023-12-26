import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>

  // <BrowserRouter basename="/portfolio">
  //   <App />
  // </BrowserRouter>
  // </React.StrictMode>
);
