import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

//const socket = io('http://localhost:5000/');
const socket = io('https://vt3e7.sse.codesandbox.io/');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ 'video': true, 'audio': true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      })

    socket.on('me', () => setMe(socket.id));
      
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, [callEnded]);

  const answerCall = () => {

    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const rejectCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  }

  const callUser = (id) => {

  
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);
      
      peer.signal(signal);
    });

    connectionRef.current = peer;
  
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  let isAudio = true
  function muteAudio() {
    isAudio = !isAudio
    stream.getAudioTracks()[0].enabled = isAudio
  }

  let isVideo = true
  function muteVideo() {
    isVideo = !isVideo
    stream.getVideoTracks()[0].enabled = isVideo
  }

  return (
    <SocketContext.Provider value={{ call, callAccepted, myVideo, userVideo, stream, setStream, name, setName, callEnded, me, callUser, leaveCall, answerCall, rejectCall, muteAudio, muteVideo }}>
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
