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

export const getExamenById = async (token, examenId) => {
  const res = await axios.get(`http://localhost:3000/api/exams/${examenId}`, {
    headers: { Authorization: token },
  });
  return res.data;
};
