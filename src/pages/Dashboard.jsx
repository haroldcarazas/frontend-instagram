import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import CourseCard from '../components/CourseCard';
import MainLayout from '../layouts/MainLayout';

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <MainLayout>
      <main className='h-[calc(100vh-70px)] flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-1'>¡Bienvenido!</h1>
        <p>Estos son tus cursos disponibles:</p>
        <section className='max-w-[1000px] flex gap-4 p-4'>
          {user?.courses.map(c => (
            <CourseCard key={c._id} id={c._id} nombre={c.name} />
          ))}
        </section>
      </main>
    </MainLayout>
  );
}

export default Dashboard;
