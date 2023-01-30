
// 内容不为空
export function isNotEmpty(content) {
  return content !== undefined && content !== null && content !== '';
}

// 转为字符串
export function toString(str) {
  return str.toString();
}

export function log() {
  console.log('我是随便打印的东西!!!');
}