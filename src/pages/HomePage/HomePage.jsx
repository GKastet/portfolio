import { Link } from "react-router-dom";
const HomePage = () => {
  // console.log(123);
  return (
    <>
      
      <div>HomePage</div>
      <h2 style={{color: "var(--pink-color)"}}>Home</h2>
      <Link to="/contacts">contacts</Link>
      
    </>
  );
};

export default HomePage;
