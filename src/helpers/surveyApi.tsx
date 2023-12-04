interface PropsQuestion {
  page: string,
}

export const getQuestions = async ({ page }: PropsQuestion) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}&pagination[pageSize]=1&pagination[page]=${page}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data, meta } = await res.json();
  const { pagination } = meta;
  return { data, pagination };
};

interface PropObjectAnswers {
  answerSave: {
    data: {
      Question: string,
      Answer: string
      correctAnswer: string,
    }
  }
}

export const sendAnswers = async ({ answerSave }: PropObjectAnswers) => {
  await fetch(`${import.meta.env.VITE_API_BASIC_URL}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answerSave),
  });
};

export const getAnswers = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASIC_URL}/api/posts`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data, meta } = await res.json();
  const { pagination } = meta;
  return { data, pagination };
};