//普通暴露必须以对象解构赋值的形式导入    包括一个一个export和用对象的形式集中export  
import { cube } from './math'
//默认暴露，则只需用一个变量整体接收  export default
import data from '../json/data.json'
//直接引入css文件，但是必须借助于loader
import '../css/test.css'
//注意data会自动被转换为原生的js对象或者数组
document.write("entry.js is work <br/>");
document.write(cube(2) + '<br/>');
document.write(JSON.stringify(data) + '<br/>')