import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { PaginationType, QuestionsType } from "../types";
import { getQuestions, sendAnswers } from "../helpers/surveyApi";
import Pagination from "../Components/Pagination";
import Swal from "sweetalert2";

const SurveyPage = () => {

  const { id } = useParams();
  const initialState = { data: {Question: '', Answer: '', correctAnswer: ''} };

  const [questionState, setQuestionState] = useState<QuestionsType[]>([]);
  const [select, setSelect] = useState("");
  const [pageState, setPageState] = useState<PaginationType>({page: 0, pageSize: 0, pageCount: 0, total: 0});
  const [answerSave, setAnswerSave] = useState(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    getQuestions({ page: id ?? '1'})
      .then(({ data, pagination }) => {
        setQuestionState(data);
        setPageState(pagination);
        setSelect("");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, Question: string, Answer: string) => {
    const { value } = e.target;
    setSelect(value);
    setAnswerSave((answerSave) => ({
      data: {
        ...answerSave.data,
        ["Question"]: Question,
        ["Answer"]: Answer,
        ["correctAnswer"]: value
      },
    }));
  };

  const sendRes =  async() => {
    try {
      await sendAnswers({answerSave});
    } catch (error) {
      console.error("Error al enviar la encuesta:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendAnswers({answerSave});
      Swal.fire("Exito!", "El cuestionario se envió correctamente!", "success");
      navigate("/profile");
    } catch (error) {
      console.error("Error al enviar la encuesta:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 w-full">
        <div className="flex flex-col justify-center items-center h-full w-full pt-5">
          <h1 className="font-semibold">ESCOGE UNA RESPUESTA</h1>
          <div className="flex flex-col justify-center shadow-md shadow-slate-300 w-4/5 md:w-2/4 bg-gray-200 p-10 my-10 rounded-lg">
            <form onSubmit={handleSubmit}>
              {questionState.map((question) => {
                return (
                  <div key={question.id}>
                    <h2 className="font-bold text-violet-800 text-xl pb-5">
                      {question.attributes.questions}
                    </h2>

                    {question.attributes.answers.data.map((answerRes) => {
                    return (
                      <div key={answerRes.id} className="p-2">
                        <label htmlFor="answers" className="px-2">
                          <input
                            type="radio"
                            id='answers'
                            name={`${question.id}`}
                            value={answerRes.attributes.correctAnswer}
                            onChange={(e) => handleChange(e, question.attributes.questions, answerRes.attributes.answers)}
                            className="px-2"
                          />
                          {answerRes.attributes.answers}
                        </label>
                      </div>
                    );
                  })}
                  </div>
                );
              })}
              <Pagination
                pagination={pageState}
                disabledAnswer={select === ""}
                sendRes={sendRes}
              />
            </form>
          </div>
        </div>
    </div>
  )
}

export default SurveyPage