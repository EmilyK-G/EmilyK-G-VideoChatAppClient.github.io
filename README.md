# Videochat Application
Hosted at http://EmilyK-G.github.io/EmilyK-G-VideoChatAppClient.github.io </br>
Setup:
- run ```npm i && npm start``` for client to start the development server
- Please have the following files running while viewing this project:

Webrtc database for this project:
https://codesandbox.io/s/webrtcindexjs-vt3e7?file=/src/index.js
</br>
Mongoose database for this project:
https://codesandbox.io/s/videochatappserverjs-9b7em?file=/src/meetingRoute.js
</br>

User stories </br>
• As a website owner, I want a private way to communicate with my clients so I don't need to use external plataforms. </br>
• As a person who lives far from home, I want a videochat platform so I can talk to my family face to face.</br>
</br>

Sources: </br>
For audio and video connection I used webrtc, socket.io and peer. Instructive tutorials: </br> 
https://www.youtube.com/watch?v=oxFr7we3LC8&t=1520s.</br>
https://www.youtube.com/watch?v=800i2EF-0XU&list=LL&index=2</br>
To connect the client-side application(react js) with database(mongodb) I used this tutorial: https://www.youtube.com/watch?v=nUbNn0voiBI.
</br> 
And since GitHub Pages doesn’t support React Router, I added a 404.html file with the redirection code to the build folder before deploying. Instructions and example:</br>
https://create-react-app.dev/docs/deployment/#github-pages </br>
https://github.com/rafgraph/spa-github-pages
