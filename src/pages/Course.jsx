import { useParams } from 'wouter';
import MainLayout from '../layouts/MainLayout';
import useExam from '../services/useExam';
import ExamCard from '../components/ExamCard';
import Loading from '../components/loading/Loading';

function Course() {
  const { id } = useParams();
  const { examenes, isExamenesLoading } = useExam({ cursoId: id });

  if (isExamenesLoading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <main className='h-[calc(100vh-70px)] flex flex-col justify-center items-center'>
        {examenes.length === 0 ? (
          <span className='text-2xl'>No hay exámenes para este curso</span>
        ) : (
          <>
            <h1 className='text-2xl mb-5'>Exámenes</h1>

            {examenes.map(e => (
              <ExamCard
                key={e._id}
                id={e._id}
                cursoNombre={e.course.name}
                duracion={e.duration}
                cMaxima={e.maxScore}
              />
            ))}
          </>
        )}
      </main>
    </MainLayout>
  );
}

export default Course;
