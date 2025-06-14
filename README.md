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

npm run build -- to build the project 
firebase deploy -- deploy the project


https://www.npmjs.com/package/@element-plus/theme-chalk