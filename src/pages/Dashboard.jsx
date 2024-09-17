import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'wouter';
import CursoCard from '../components/CursoCard';

function Dashboard() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [, navigate] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.clear();
    navigate('/');
  };

  return (
    <main>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <h1 className='text-3xl'>¡Bienvenido!</h1>
      <section className='max-w-[1000px] m-auto flex gap-4 p-4'>
        {user?.courses.map(c => (
          <CursoCard key={c._id} id={c._id} nombre={c.name} />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
