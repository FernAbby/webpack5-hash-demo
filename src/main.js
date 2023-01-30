import { isNotEmpty } from './module2';
import { formatTime } from './module3';
import './main.css';

function test(content) {
  if (isNotEmpty(content)) {
    console.log('====>内容为空!');
    return;
  }
  console.log('====>111 内容不为空!');
}

console.log('有什么好的，这个人生!');
console.log(formatTime());