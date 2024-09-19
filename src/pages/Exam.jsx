import { useParams } from 'wouter';
import MainLayout from '../layouts/MainLayout';
import useExam from '../services/useExam';
import Loading from '../components/loading/Loading';
import PreguntaSimple from '../components/preguntas/PreguntaSimple';
import PreguntaMultiple from '../components/preguntas/PreguntaMultiple';
import PreguntaVideo from '../components/preguntas/PreguntaVideo';

function Exam() {
  const { id } = useParams();
  const { examen, isExamenLoading } = useExam({ examenId: id });

  if (isExamenLoading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <main className='max-w-[1000px] mx-auto p-5'>
        <form className='flex flex-col gap-7'>
          {examen.questions.map((q, i) => {
            if (q.type === 'simple') {
              return (
                <PreguntaSimple
                  key={i}
                  id={q._id}
                  pregunta={q.question}
                  numero={i + 1}
                />
              );
            }

            if (q.type === 'multiple') {
              return (
                <PreguntaMultiple
                  key={i}
                  id={q._id}
                  pregunta={q.question}
                  numero={i + 1}
                  opciones={q.options}
                />
              );
            }

            if (q.type === 'video') {
              return (
                <PreguntaVideo
                  key={i}
                  id={q._id}
                  pregunta={q.question}
                  numero={i + 1}
                />
              );
            }
          })}

          <button
            className='bg-green-400 px-3 py-2 rounded-md self-center text-white text-lg'
            type='submit'
          >
            Finalizar examen
          </button>
        </form>
      </main>
    </MainLayout>
  );
}

export default Exam;
