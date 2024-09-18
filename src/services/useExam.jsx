import { useQuery } from '@tanstack/react-query';
import { getExamenById, getExamenesByCurso } from '../api/examApi';

function useExam({ cursoId, examenId }) {
  const token = localStorage.getItem('authToken');

  const { data: examenes, isLoading: isExamenesLoading } = useQuery({
    queryKey: ['examenes'],
    queryFn: () => getExamenesByCurso(token, cursoId),
    enabled: Boolean(cursoId),
  });

  const { data: examen, isLoading: isExamenLoading } = useQuery({
    queryKey: ['examen'],
    queryFn: () => getExamenById(token, examenId),
    enabled: Boolean(examenId),
  });

  return { examenes, examen, isExamenLoading, isExamenesLoading };
}

export default useExam;
