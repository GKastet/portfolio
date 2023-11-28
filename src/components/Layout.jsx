import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({lang, changeLanguage}) => {
  return (
    <>      
      <Header lang={lang} changeLanguage={changeLanguage}/>
      <Outlet />
      <Footer lang={lang}/>
    </>
  );
};

Layout.propTypes = {
  lang: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default Layout;
