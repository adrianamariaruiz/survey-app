import { Link } from "react-router-dom";
import welcome from "../assets/welcome.webp";

const HomePage = () => {
  return (
    <>
      <div className="  flex flex-col justify-center items-center p-5 h-[620px]">
        <h1 className="text-5xl font-bold pb-10 bg-gradient-to-r from-violet-700 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-pulse sm:text-6xl">
          ¡Bienvenid@!
        </h1>
        <img src={welcome} alt="welcome" />
        <Link
          to="/survey/1"
          className="text-white bg-violet-700 hover:bg-violet-800 hover:scale-110 transition duration-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center w-44"
        >
          Iniciar Test
        </Link>
      </div>
    </>
  );
};

export default HomePage;