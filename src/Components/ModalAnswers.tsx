
import { useEffect, useState } from "react";
import { getAnswers } from "../helpers/surveyApi";
import { AnswerData } from "../types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const ModalAnswers = () => {

  const [correct, setCorrect] = useState([])

  useEffect(() => {
    getAnswers()
      .then(({ data }) => {
        if(data.length === 0){
          return 
        }

        setCorrect(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col shadow-md shadow-slate-300 bg-gray-200 p-5 my-5 rounded-lg md:my-0 md:mx-2 lg:w-full lg:mx-10">
          <h2 className="font-bold text-orange-600 text-xl pb-5">Tus respuestas fueron:</h2>
          {
            correct.map((question: AnswerData) => {
              return (
                <div key={question.id} className="flex flex-col">
                  <h2 className="font-bold text-violet-800 text-md md:text-xl pb-5 pr-5">
                    {question.attributes.Question}
                  </h2>
                  <div className="flex flex-row">
                    <h2 className="font-bold text-violet-500 text-md md:text-xl pb-5 pr-5">
                      {question.attributes.Answer}
                    </h2>
                    <p>
                      {question.attributes.correctAnswer ? <FontAwesomeIcon icon={faCheck} className="text-green-600" /> : <FontAwesomeIcon icon={faXmark} className="text-red-600" />}
                    </p>
                  </div>
                  <hr className="border border-violet-200 mb-2"/>
                </div>
              );
            })}

        </div>
      </div>
    </>
  )
}

export default ModalAnswers