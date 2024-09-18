import PropTypes from 'prop-types';
import { Link } from 'wouter';

function ExamCard({ id, cursoNombre, duracion, cMaxima }) {
  return (
    <Link
      to={`/exams/${id}`}
      className='bg-blue-400 w-[250px] h-[200px] rounded-md p-5 flex flex-col justify-end items-start cursor-pointer'
    >
      <p className='text-2xl text-white'>{cursoNombre}</p>
      <p className='text-md'>Duración: {duracion}</p>
      <p className='text-md'>Calificación máxima: {cMaxima}</p>
    </Link>
  );
}

ExamCard.propTypes = {
  id: PropTypes.string.isRequired,
  cursoNombre: PropTypes.string.isRequired,
  duracion: PropTypes.number.isRequired,
  cMaxima: PropTypes.number.isRequired,
};

export default ExamCard;
