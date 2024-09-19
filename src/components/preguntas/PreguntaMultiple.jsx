import { number, string, array } from 'prop-types';

function PreguntaMultiple({ id, pregunta, opciones, numero }) {
  return (
    <div className='flex flex-col gap-1 text-lg'>
      <span>
        {numero}. {pregunta}
      </span>
      <div className='flex flex-col gap-1 capitalize'>
        {opciones.map((o, i) => (
          <label key={i}>
            <input name={id} value={o} type='radio' /> {o}
          </label>
        ))}
      </div>
    </div>
  );
}

PreguntaMultiple.propTypes = {
  id: string.isRequired,
  pregunta: string.isRequired,
  opciones: array.isRequired,
  numero: number,
};

export default PreguntaMultiple;
