import { func } from 'prop-types';

function PauseRecordingButton({ pauseRecording }) {
  return (
    <button
      className='bg-orange-400 text-white px-3 py-2 rounded-md'
      onClick={pauseRecording}
      type='button'
    >
      Pausar
    </button>
  );
}

PauseRecordingButton.propTypes = {
  pauseRecording: func.isRequired,
};

export default PauseRecordingButton;
