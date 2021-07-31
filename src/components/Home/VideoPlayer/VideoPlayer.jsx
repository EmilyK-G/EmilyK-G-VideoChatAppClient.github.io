import React, { useContext,} from 'react';
import './VideoPlayer.css';

import { SocketContext } from '../../../SocketContext.jsx';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, setName, muteAudio, muteVideo } = useContext(SocketContext);

  return (
    <div className={"my-4 videoBackground " + (callAccepted && !callEnded ? 'd-inline-flex' : 'container-sm videoContainerWidth')}>
      {stream && (
      <div className="px-0 container-sm">
          <h4 className="text-light p-2 p-sm-4 mt-sm-3 m-sm-2 nameBackground namePosition">{name || 'Name'}</h4>
          <video playsInline muted ref={myVideo} autoPlay className={"py-sm-3 px-md-2 px-0 videoPosition" + (callAccepted && !callEnded ? ' inCallVideoSize' : ' videoSize')} />
          <div className="muteBtn d-flex ms-sm-4 flex-column">
            <button onClick={muteVideo} className="btn muteBtnBgr">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
              </svg>
            </button>
            <button onClick={muteAudio} className="btn muteBtnBgr">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
              </svg>
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <input type="text" placeholder="Your Name Here" aria-label="Name" value={name} onChange={(e) => setName(e.target.value)} autoFocus className={'form-control nameInput align-self-center nameInputPosition' + (callAccepted && !callEnded ? ' shrinkNameInput' : '')} maxLength="15"/>
          </div>
      </div>
      )}
      {callAccepted && !callEnded && (
        <div className="container px-0">
          <div>
            <h4 className="text-light p-2 p-sm-4 mt-sm-3 m-sm-2 nameBackground namePosition">{call.name || 'Name'}</h4>
            <video playsInline ref={userVideo} autoPlay className="inCallVideoSize py-sm-3 px-md-2 px-0" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
