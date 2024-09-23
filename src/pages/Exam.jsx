import { useParams } from 'wouter';
import MainLayout from '../layouts/MainLayout';
import useExam from '../services/useExam';
import Loading from '../components/loading/Loading';
import PreguntaSimple from '../components/preguntas/PreguntaSimple';
import PreguntaMultiple from '../components/preguntas/PreguntaMultiple';
import PreguntaVideo from '../components/preguntas/PreguntaVideo';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Exam() {
  const { id } = useParams();
  const { examen, isExamenLoading, resultMutation } = useExam({
    examenId: id,
  });
  const { user, videoBlobUrl } = useContext(AuthContext);
  console.log(videoBlobUrl);
  if (isExamenLoading) {
    return <Loading />;
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const token = localStorage.getItem('authToken');
      const res = await fetch(videoBlobUrl);
      const video = await res.blob();

      const userAnswers = [];
      for (const q of examen.questions) {
        userAnswers.push({
          questionId: q._id,
          answer: e.target[q._id]?.value,
        });
      }

      const data = new FormData();
      data.append('video', video, 'examen.mp4');
      data.append('userAnswers', JSON.stringify(userAnswers));

      await resultMutation.mutateAsync({
        token,
        data,
        examId: id,
        userId: user._id,
      });
    } catch (error) {
      console.log('Error al enviar el formulario', error);
    }
  };

  return (
    <MainLayout>
      <main className='max-w-[1000px] mx-auto p-5'>
        <form className='flex flex-col gap-7' onSubmit={handleSubmit}>
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
