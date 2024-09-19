import { string, func } from 'prop-types';

function StartRecordingButton({ status, startRecording }) {
  return (
    <button
      className='bg-blue-400 text-white px-3 py-2 rounded-md'
      onClick={startRecording}
      type='button'
    >
      {status === 'idle' ? 'Iniciar' : 'Rehacer'} grabación
    </button>
  );
}

StartRecordingButton.propTypes = {
  status: string.isRequired,
  startRecording: func.isRequired,
};

export default StartRecordingButton;
