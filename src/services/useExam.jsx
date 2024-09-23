import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import {
  getExamenById,
  getExamenesByCurso,
  postResultExamen,
} from '../api/examApi';

function useExam({ cursoId, examenId }) {
  const token = localStorage.getItem('authToken');
  const [, setLocation] = useLocation();

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

  const resultMutation = useMutation({
    mutationKey: ['nuevoExamen'],
    mutationFn: postResultExamen,
    onError: err => console.log('Error al subir la respuesta', err),
    onSuccess: () => {
      alert('Respuesta guardada');
      setLocation('/dashboard');
    },
  });

  return {
    examenes,
    examen,
    isExamenLoading,
    isExamenesLoading,
    resultMutation,
  };
}

export default useExam;
