// export interface ApiResponse {
//   data: QuestionsType[];
// }

// QUESTIONS
export interface QuestionsType {
  id: number;
  attributes: AttributesQuestion;
}

export interface AttributesQuestion {
  questions: string;
  answers: {
    data: [DataAttribute: DataAttribute];
  };
}

interface DataAttribute {
  id: number;
  attributes: {
    answers: string;
    correctAnswer: string;
  };
}

// POSTS
export interface AnswerData {
    id: number,
    attributes: {
      Answer: string;
      Question: string;
      correctAnswer: boolean;
    };
}

// PAGINATION
export interface PaginationType {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
