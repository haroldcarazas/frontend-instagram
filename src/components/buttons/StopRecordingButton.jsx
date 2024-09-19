import { func } from 'prop-types';

function StopRecordingButton({ stopRecording }) {
  return (
    <button
      className='bg-red-400 text-white px-3 py-2 rounded-md'
      onClick={stopRecording}
      type='button'
    >
      Detener
    </button>
  );
}

StopRecordingButton.propTypes = {
  stopRecording: func.isRequired,
};

export default StopRecordingButton;
