import axios from 'axios';

export const getExamenesByCurso = async (token, cursoId) => {
  const res = await axios.get(
    `http://localhost:3000/api/exams/curso/${cursoId}`,
    {
      headers: { Authorization: token },
    }
  );
  return res.data;
};
