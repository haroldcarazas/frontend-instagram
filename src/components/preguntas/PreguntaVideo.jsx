import { string, number } from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import StartRecordingButton from '../buttons/StartRecordingButton';
import StopRecordingButton from '../buttons/StopRecordingButton';
import PauseRecordingButton from '../buttons/PauseRecordingButton';
import ResumeRecordingButton from '../buttons/ResumeRecordingButton';
import { AuthContext } from '../../context/AuthContext';

function PreguntaVideo({ pregunta, numero }) {
  const videoRef = useRef(null);
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
    previewStream,
  } = useReactMediaRecorder({ video: true, audio: true });
  const { setVideoUrl } = useContext(AuthContext);

  useEffect(() => {
    setVideoUrl(mediaBlobUrl);
  }, [mediaBlobUrl, setVideoUrl]);

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [videoRef, previewStream]);

  return (
    <div className='text-lg flex flex-col gap-1'>
      <span>
        {numero}. {pregunta}
      </span>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='flex gap-2'>
          {(status === 'idle' || status === 'stopped') && (
            <StartRecordingButton
              status={status}
              startRecording={startRecording}
            />
          )}

          {status === 'recording' && (
            <>
              <StopRecordingButton stopRecording={stopRecording} />
              <PauseRecordingButton pauseRecording={pauseRecording} />
            </>
          )}

          {status === 'paused' && (
            <>
              <StopRecordingButton stopRecording={stopRecording} />
              <ResumeRecordingButton resumeRecording={resumeRecording} />
            </>
          )}
        </div>
        <div>
          {status === 'recording' && (
            <video
              ref={videoRef}
              className='w-[500px] rounded-md self-center'
              autoPlay
            ></video>
          )}
          {status === 'stopped' && (
            <video
              src={mediaBlobUrl}
              className='max-w-[500px] rounded-md self-center'
              controls
            ></video>
          )}
        </div>
      </div>
    </div>
  );
}

PreguntaVideo.propTypes = {
  //   id: string.isRequired,
  pregunta: string.isRequired,
  numero: number.isRequired,
};

export default PreguntaVideo;
