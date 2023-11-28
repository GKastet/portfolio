import { Suspense, lazy, useState } from "react";
import {
  Navigate,
  Route,  
  Routes,  
} from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const [lang, setLang] = useState('eng')
  
  const changeLanguage = (evt) => {    
    const currentLang = evt.currentTarget.value.toLowerCase()    
    setLang(currentLang);
  }

  return (    
    <Suspense fallback={<Loader />}>      
      <Routes>
        <Route path="/" element={<Layout lang={lang} changeLanguage={changeLanguage}/>}>
          <Route index element={<HomePage lang={lang}/>} />
          <Route path="contacts" element={<ContactsPage lang={lang}/>} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Suspense>    
  );
}

export default App;