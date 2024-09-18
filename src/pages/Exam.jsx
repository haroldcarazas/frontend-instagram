import { useParams } from 'wouter';
import MainLayout from '../layouts/MainLayout';
import useExam from '../services/useExam';
import Loading from '../components/loading/Loading';
import PreguntaSimple from '../components/preguntas/PreguntaSimple';

function Exam() {
  const { id } = useParams();
  const { examen, isExamenLoading } = useExam({ examenId: id });

  if (isExamenLoading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      {examen.questions.map(
        q =>
          q.type === 'simple' && (
            <PreguntaSimple key={q._id} id={q._id} pregunta={q.question} />
          )
      )}
    </MainLayout>
  );
}

export default Exam;
