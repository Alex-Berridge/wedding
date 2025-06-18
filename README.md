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

deployment: 

  update version ID in package.json
  npm run build -- to build the project 
  firebase deploy -- deploy the project

re-deployment:
  in the unlikely event you need to change it from one firebase project to another
  you can delete .firebasesrc and any other firebase files in the repository, such as firebase.json and the .firebase folder. 
  then firebase init hosting again and you'll be allowed to select a project connected to the account.

https://www.npmjs.com/package/@element-plus/theme-chalk