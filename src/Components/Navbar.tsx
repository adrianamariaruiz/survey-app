import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <header className="bg-white w-full py-5 flex justify-around text-lg shadow-md shadow-slate-300">
        <div>
          <Link to="/" className="font-bold text-orange-500 flex gap-5 hover:text-pink-500">
            <FontAwesomeIcon icon={faHouse} className="flex justify-center items-center pt-1 text-orange-500"/>
            Inicio
          </Link>
        </div>
        <div className="hover:text-pink-500">
          <Link
            to="/profile"
            className="flex gap-5 font-bold text-violet-500 hover:text-pink-500"
          >
            <FontAwesomeIcon icon={faUser} className="flex justify-center items-center pt-1 text-violet-500"/>
            Mi perfil
          </Link>
        </div>
      </header>

    </>
  )
}

export default Navbar