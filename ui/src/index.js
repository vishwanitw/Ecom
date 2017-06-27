 //eslint-disable-next-line no-unused-vars
 import { h, render } from 'preact-compat'
 import routes from './route'
 import 'D:/Workspace2017/ReactJS/Ecom/ui/node_modules/bootstrap/dist/css/bootstrap.css';
 import 'D:/Workspace2017/ReactJS/Ecom/ui/node_modules/bootstrap/dist/css/bootstrap-theme.css';

 var _APP_INFO = { //eslint-disable-line no-unused-vars
   name:'Ecom',
   branch:'Master',
   version:'1.0'
 };

 render(routes, document.body);
