import './Home.css';
import useAuth from "../../hooks/useAuth";

const Home = () => {

  const { auth } = useAuth();

  return(
    <div className="home">
      <h1>Bienvenido, {auth.userName}</h1>
      <img src="logo-nav.png" alt="" />
    </div>
  )

}

export default Home