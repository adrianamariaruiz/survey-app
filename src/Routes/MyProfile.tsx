import ModalAnswers from "../Components/ModalAnswers";
import Score from "../Components/Score";
import avatar from "../assets/avatar.webp";

const MyProfile = () => {

  return (
    <>
      <header className="flex justify-center items-center h-20">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Mi puntaje del cuestionario</h1>
        </div>
      </header>

      <main className="h-auto flex flex-col p-2 justify-center md:flex-row xl:gap-10">
        <div className="flex flex-col shadow-md shadow-slate-300 w-full h-full bg-gray-200 p-10 rounded-lg md:w-1/3" >
          <p className="px-5 font-bold text-center">
            Tienes <span className="text-violet-600 text-lg"><Score/></span> de las respuestas correctas
          </p>
          <div className="flex flex-col items-center text-white">
            <img
              src={avatar}
              alt="imagen"
              className="w-auto h-24 mt-5 rounded-full"
            />
          <div className="bg-violet-600 mt-5 py-2 px-4 rounded text-lg font-bold">
              <Score />
          </div>
          </div>
        </div>
        <ModalAnswers/>
      </main>
    </>
  );
};

export default MyProfile;
