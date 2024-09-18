import proptypes from 'prop-types';

function PreguntaSimple({ id, pregunta }) {
  return (
    <label>
      {pregunta} <input type='text' name={id} />
    </label>
  );
}

PreguntaSimple.propTypes = {
  id: proptypes.string.isRequired,
  pregunta: proptypes.string.isRequired,
};

export default PreguntaSimple;
