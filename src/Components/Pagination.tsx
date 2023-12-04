import { Link } from "react-router-dom";
import { PaginationType } from "../types";

interface PropDisables {
  disabledAnswer: boolean,
  pagination: PaginationType,
  sendRes: () => Promise<void>
}

const Pagination = ({ pagination, disabledAnswer, sendRes }: PropDisables) => {
  const { page, pageCount, total } = pagination;

  const firstPage = page === 1;
  const lastPage = page === pageCount || disabledAnswer;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const previousPageUrl = firstPage ? "#" : `/survey/${previousPage}`;
  const nextPageUrl = lastPage ? "#" : `/survey/${nextPage}`;

  return (
    <div className="h-full mt-5 flex flex-col">
      <div className="flex justify-around">
        <Link
          to={previousPageUrl}
          className={` ${firstPage ? "pointer-events-none bg-gray-700 opacity-50" : ""
            } py-2 rounded-lg px-5 text-white bg-violet-700 hover:bg-violet-800 m-10 font-medium`}
        >
          Anterior
        </Link>

        <Link
          to={nextPageUrl}
          onClick={sendRes}
          className={`${lastPage ? "pointer-events-none bg-gray-700 opacity-50" : ""
            } py-2 rounded-lg px-5 text-white bg-violet-700 hover:bg-violet-800 m-10 font-medium`}
        >
          Siguiente
        </Link>
      </div>

      <div className="flex justify-center">
        {page === total && (
          <button
            type="submit"
            className=" w-36 text-white bg-pink-500 hover:bg-pink-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Enviar
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
