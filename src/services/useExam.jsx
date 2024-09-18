import { useQuery } from '@tanstack/react-query';
import { getExamenesByCurso } from '../api/examApi';

function useExam({ cursoId }) {
  const token = localStorage.getItem('authToken');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['examenes'],
    queryFn: () => getExamenesByCurso(token, cursoId),
  });

  return { examenes: data, isLoading, isError };
}

export default useExam;
