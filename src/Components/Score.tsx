import { useEffect, useState } from "react";
import { getAnswers} from "../helpers/surveyApi";
import { AnswerData} from "../types";


const Score = () => {

  const [scoreResult, setScoreResult] = useState('');

  useEffect(() => {
    getAnswers()
      .then(({ data }) => {

        if(data.length === 0){
            return 
        }

        const correctAnswer = data.filter(
          (dataAnswer: AnswerData) => dataAnswer.attributes.correctAnswer === true
        );
        setScoreResult(((correctAnswer.length / data.length) * 100).toFixed(0));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
        {
            scoreResult ? <span> {scoreResult}% </span> : <span>0%</span>
        }
    </>
  );
};

export default Score;