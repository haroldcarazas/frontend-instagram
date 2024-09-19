import { number, string } from 'prop-types';

function PreguntaSimple({ id, pregunta, numero }) {
  return (
    <label className='flex flex-col gap-1 text-lg'>
      {numero}. {pregunta}
      <input type='text' name={id} className='border rounded-md px-3 py-2' />
    </label>
  );
}

PreguntaSimple.propTypes = {
  id: string.isRequired,
  pregunta: string.isRequired,
  numero: number,
};

export default PreguntaSimple;
