(this["webpackJsonpvideo-chat-app"]=this["webpackJsonpvideo-chat-app"]||[]).push([[0],{110:function(e,t){},112:function(e,t){},121:function(e,t,n){},122:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(72),s=n.n(a),i=n(25),l=n(2),r=n(4),o=n(73),d=n(35),u=n.n(d),j=n(0),m=Object(c.createContext)(),b=Object(o.io)("https://vt3e7.sse.codesandbox.io/"),x=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(r.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)(!1),o=Object(r.a)(l,2),d=o[0],x=o[1],f=Object(c.useState)(),h=Object(r.a)(f,2),O=h[0],v=h[1],g=Object(c.useState)(""),p=Object(r.a)(g,2),N=p[0],C=p[1],y=Object(c.useState)({}),k=Object(r.a)(y,2),w=k[0],B=k[1],S=Object(c.useState)(""),V=Object(r.a)(S,2),A=V[0],I=V[1],T=Object(c.useRef)(),M=Object(c.useRef)(),z=Object(c.useRef)();Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){v(e),T.current.srcObject=e})),b.on("me",(function(){return I(b.id)})),b.on("callUser",(function(e){var t=e.from,n=e.name,c=e.signal;B({isReceivingCall:!0,from:t,name:n,signal:c})}))}),[d]);var D=!0;var R=!0;return Object(j.jsx)(m.Provider,{value:{call:w,callAccepted:s,myVideo:T,userVideo:M,stream:O,setStream:v,name:N,setName:C,callEnded:d,me:A,callUser:function(e){var t=new u.a({initiator:!0,trickle:!1,stream:O});t.on("signal",(function(t){b.emit("callUser",{userToCall:e,signalData:t,from:A,name:N})})),t.on("stream",(function(e){M.current.srcObject=e})),b.on("callAccepted",(function(e){i(!0),t.signal(e)})),z.current=t},leaveCall:function(){x(!0),z.current.destroy(),window.location.reload()},answerCall:function(){i(!0);var e=new u.a({initiator:!1,trickle:!1,stream:O});e.on("signal",(function(e){b.emit("answerCall",{signal:e,to:w.from})})),e.on("stream",(function(e){M.current.srcObject=e})),e.signal(w.signal),z.current=e},rejectCall:function(){x(!0),z.current.destroy(),window.location.reload()},muteAudio:function(){D=!D,O.getAudioTracks()[0].enabled=D},muteVideo:function(){R=!R,O.getVideoTracks()[0].enabled=R}},children:t})};n(121),n(122);var f=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/your_meetings",children:"Your meetings"})})]})})]})})};n(127),n(128);var h=function(){return Object(j.jsx)("h1",{className:"Welcoming text-center",children:"Welcome to ReyA VideoChat"})},O=(n(129),function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],o=i[1],d=Object(c.useContext)(m),u=d.name,b=d.callAccepted,x=d.myVideo,f=d.userVideo,h=d.callEnded,O=d.stream,v=d.call,g=d.setName,p=d.muteAudio,N=d.muteVideo;return Object(j.jsxs)("div",{className:"my-4 videoBackground "+(b&&!h?"d-inline-flex":"container-sm videoContainerWidth"),children:[O&&Object(j.jsxs)("div",{className:"px-0 container-sm",children:[Object(j.jsx)("h4",{className:"text-light p-2 p-sm-4 mt-sm-3 m-sm-2 nameBackground namePosition",children:u||"Name"}),Object(j.jsx)("video",{playsInline:!0,muted:!0,ref:x,autoPlay:!0,className:"py-sm-3 px-md-2 px-0 videoPosition"+(b&&!h?" inCallVideoSize":" videoSize")}),Object(j.jsxs)("div",{className:"muteBtn d-flex ms-sm-4 flex-column",children:[Object(j.jsx)("button",{onClick:function(){N(),a(!n)},className:"btn muteBtnBgr"+(n?" clickedBtn":" unclickedBtn"),children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-camera-video",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"})})}),Object(j.jsx)("button",{onClick:function(){p(),o(!l)},className:"btn muteBtnBgr"+(l?" clickedBtn":" unclickedBtn"),children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-mic",viewBox:"0 0 16 16",children:[Object(j.jsx)("path",{d:"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"}),Object(j.jsx)("path",{d:"M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"})]})})]}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("input",{type:"text",placeholder:"Your Name Here","aria-label":"Name",value:u,onChange:function(e){return g(e.target.value)},autoFocus:!0,className:"form-control nameInput align-self-center nameInputPosition"+(b&&!h?" shrinkNameInput":""),maxLength:"15"})})]}),b&&!h&&Object(j.jsx)("div",{className:"container px-0",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"text-light p-2 p-sm-4 mt-sm-3 m-sm-2 nameBackground namePosition",children:v.name||"Name"}),Object(j.jsx)("video",{playsInline:!0,ref:f,autoPlay:!0,className:"inCallVideoSize py-sm-3 px-md-2 px-0"})]})})]})}),v=n(28),g=n.n(v),p=n(75),N=(n(150),function(e){var t=e.children,n=Object(c.useContext)(m),a=n.me,s=n.callAccepted,i=n.name,l=n.callEnded,o=n.leaveCall,d=n.callUser,u=Object(c.useState)(""),b=Object(r.a)(u,2),x=b[0],f=b[1],h=Object(c.useState)(!1),O=Object(r.a)(h,2),v=O[0],N=O[1];return Object(j.jsxs)("form",{className:"d-flex flex-column align-items-center container-sm my-4 pt-3 p-sm-5",noValidate:!0,autoComplete:"off",children:[t,Object(j.jsxs)("div",{className:"container d-flex flex-column align-content-center my-3",children:[Object(j.jsx)("h5",{className:"m-3 p-2 accountInfo text-center text-lg-start",children:"Account Info"}),Object(j.jsxs)("div",{className:"d-inline-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center",children:[""===a?Object(j.jsx)("button",{type:"button",onClick:function(){return window.location.reload()},className:"btn-light reloadButton m-2 p-2",children:Object(j.jsx)("cite",{children:"Get a meeting ID"})}):Object(j.jsx)("h6",{className:"m-3 p-2 text-center",children:Object(j.jsxs)("cite",{title:"Meeting Id",children:["Your Meeting Id: ",a]})}),Object(j.jsx)(p.CopyToClipboard,{text:a,children:Object(j.jsx)("button",{type:"button",className:"mx-5 btn borderCopyBtn copyBtn btn-dark",children:"Copy"})})]}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:s&&!l?Object(j.jsx)("button",{type:"button",onClick:o,className:"my-4 btn borderBtn btn-danger",children:"Hang Up"}):Object(j.jsxs)("div",{className:"mb-5 d-flex flex-column content borderCircle "+(v?"expandCircle":"hideBackground"),children:[v&&Object(j.jsx)("input",{type:"text",placeholder:"ID to call","aria-label":"ID to call",value:x,onChange:function(e){return f(e.target.value)},autoFocus:!0,className:"contentTransform form-control align-self-center",maxLength:"25"}),Object(j.jsx)("div",{onClick:function(){return N(!0)},className:v?"contentTransform":"",children:Object(j.jsx)("button",{type:"button",onClick:v?function(e){d(x),function(e){e.preventDefault();var t={username:i,meetingId:a,time:(new Date).getTime()};g.a.post("https://9b7em.sse.codesandbox.io/create",t).then((function(e){console.log(e)}),(function(e){console.log(e)}))}(e)}:void 0,className:"btnTransition borderBtn btn btn-dark "+(v?"shrinkBtn":""),children:"Call"})}),Object(j.jsx)("div",{className:"closingDiv"+(v?" contentTransform":""),onClick:function(){return N(!1)},children:Object(j.jsx)("button",{type:"button",className:"btn closingBtn text-light"+(v?"":" invisible"),children:"x"})})]})})]})]})}),C=(n(151),function(){var e=Object(c.useContext)(m),t=e.answerCall,n=e.call,a=e.callAccepted,s=e.rejectCall;return Object(j.jsx)("div",{className:"d-flex justify-content-center",children:n.isReceivingCall&&!a&&Object(j.jsxs)("div",{className:"d-inline-flex m-4 p-4 align-items-center flex-column flex-sm-row",children:[Object(j.jsxs)("h1",{className:"text-center text-sm-start",children:[n.name?n.name:"Someone"," is calling:"]}),Object(j.jsx)("button",{type:"button",className:"m-2 btn borderBtnAnswer btn-success",onClick:function(e){t()},children:"Answer"}),Object(j.jsx)("button",{type:"button",className:"m-2 btn borderBtnAnswer btn-danger",onClick:function(e){s()},children:"Reject"})]})})});var y=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"container homeBackground",children:[Object(j.jsx)("div",{className:"d-flex justify-content-center m-2 pt-5",children:Object(j.jsx)(h,{})}),Object(j.jsx)(O,{}),Object(j.jsx)(N,{children:Object(j.jsx)(C,{onCallChange:function(e){return function(e){e.then((function(){return a(e)})).then(console.log(n))}(e)}})})]})},k=(n(152),n(153));var w=function(){var e=Object(c.useState)([{meeting:!0,meetingId:"",username:"",time:"",_id:""}]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("/meetings").then((function(e){if(e.ok)return e.json()})).then((function(e){a(e)})).then((function(){return o(!1)})).catch((function(e){return console.log(e)}))}),[l]),n.length>=1?Object(j.jsx)("div",{className:"container d-flex flex-wrap justify-content-around mt-2 p-3 meetingsBackground",children:n.map((function(e){return Object(j.jsxs)("div",{className:"d-inline-flex flex-column m-3 p-3 mapBackground",children:[Object(j.jsx)("h3",{children:e.username}),Object(j.jsx)("h4",{children:k(e.time,"dddd, mmmm dS, yyyy, HH:MM TT")}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){var t;t=e._id,g.a.delete("/delete/"+t),o(!0)},children:"Delete Meeting"})]},e._id)}))}):Object(j.jsx)("div",{className:"container p-3 meetingsBackground",children:Object(j.jsx)("h4",{children:"You have 0 meetings"})})};n(154);var B=function(){return Object(j.jsx)("footer",{className:"bg-dark fixed-bottom footer",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("span",{className:"text-muted",children:"\xa9 ReyA. Company"})})})},S=function(){return Object(j.jsxs)("div",{className:"container appContainer",children:[Object(j.jsxs)(i.a,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(x,{children:Object(j.jsx)(y,{})})}),Object(j.jsx)(l.a,{path:"/your_meetings",children:Object(j.jsx)(w,{})})]}),Object(j.jsx)(B,{})]})};n(155);s.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.47d62088.chunk.js.map