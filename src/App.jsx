import { Suspense, lazy } from "react";
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";
//import HomePage from '../src/pages/HomePage/HomePage'

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

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
//         }
//       ]
//   }
//     // {
//     //   path: '/',
//     //   element: <HomePage/>
//     // },
//     // {
//     //   path: '/portfolio',
//     //   element: <HomePage/>
//     // },
//     // {
//     //   path: '/portfolio/contacts',
//     //   element: <ContactsPage/>
//     // }
// ])

function App() {
  return ( 
    // <RouterProvider router={router} />  
      
       <Suspense fallback={<Loader />}>
        <Layout/>
      {/* //   <Routes>
      //     <Route path="/" element={<Layout />}>
      //       <Route index element={<HomePage />} />
      //       <Route path="/contacts" element={<ContactsPage />} />
      //       <Route path="*" element={<Navigate to="/" />}></Route>
      //     </Route>
      //   </Routes> */}
      </Suspense>    
  );
}

export default App;
