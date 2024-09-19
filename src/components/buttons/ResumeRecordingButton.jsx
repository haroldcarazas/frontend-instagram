import { func } from 'prop-types';

function ResumeRecordingButton({ resumeRecording }) {
  return (
    <button
      className='bg-green-400 text-white px-3 py-2 rounded-md'
      onClick={resumeRecording}
      type='button'
    >
      Reaundar grabación
    </button>
  );
}

ResumeRecordingButton.propTypes = {
  resumeRecording: func.isRequired,
};

export default ResumeRecordingButton;
