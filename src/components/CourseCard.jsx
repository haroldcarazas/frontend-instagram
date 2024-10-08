import PropTypes from 'prop-types';
import { Link } from 'wouter';

function CourseCard({ id, nombre }) {
  return (
    <Link
      to={`/courses/${id}`}
      className='bg-yellow-400 w-[250px] rounded-md p-6 flex justify-center items-center cursor-pointer'
    >
      <p className='text-2xl'>{nombre}</p>
    </Link>
  );
}

CourseCard.propTypes = {
  id: PropTypes.any.isRequired,
  nombre: PropTypes.string.isRequired,
};

export default CourseCard;
