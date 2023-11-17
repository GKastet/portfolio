import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage.jsx";
// import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//       path: '/portfolio',
//       element: <App/>,
//       children: [
//         {
//           path: '/portfolio',
//       element: <HomePage/>,
//         },
//         {
//           path: '/portfolio/contacts',
//           element: <ContactsPage/>
//         },
//         {
//           path: '*',
//           element: <HomePage/>
//         },
//       ]
//   }    
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <BrowserRouter basename="/portfolio">
  // <RouterProvider router={router} />  
  <HashRouter>
    <App />

  </HashRouter>
  // <BrowserRouter basename={import.meta.env.BASE_URL}>
  //   <App />
  // </BrowserRouter>
  // </React.StrictMode>,
  // <BrowserRouter>
);
