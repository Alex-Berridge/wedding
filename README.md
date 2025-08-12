# wedding

technology used

setup: 

  [vue project setup command @vue/cli]
  
  npm install firebase
  npm install -g firebase-tools
  check npm and vue works
    npm run serve
    npm run build
  firebase login
  firebase init hosting
    use as public directory - dist
    setup as single page app - no
    setup automatic builds and deploys with Github - no
  npm run build 
  firebase deploy

  npm install element-plus --save
  npm install -D unplugin-vue-components unplugin-auto-import

working:
  open up a command prompt window, navigate to C:\HomeDev\Wedding and type "npm run serve" to host the website locally. 
  open up a terminal window in Visual studio so you can conveniently use the npm run build and firebase deploy commands.

deployment: 

  update version ID in package.json
  npm run build -- to build the project 
  firebase deploy -- deploy the project

re-deployment:
  in the unlikely event you need to change it from one firebase project to another
  you can delete .firebaseRC and any other firebase files in the repository, such as firebase.json and the .firebase folder. 
  then firebase init hosting again and you'll be allowed to select a project connected to the account.

https://www.npmjs.com/package/@element-plus/theme-chalk