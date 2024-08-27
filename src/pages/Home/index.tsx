import Button from "../../components/Button";
import Navbar from "../../components/NavBar";
import "./styles.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-main-container">
        <div className="home-title">
          <h1>PSApiGithub by <a className="linkedln" target="_blank" href="https://www.linkedin.com/in/paulocarneiroo/">Paulo Carneiro</a></h1>
        </div>
        <Link to="/profile">
        <Button title="Começar" />
        </Link>
      </div>
    </>
  );
};

export default Home;
