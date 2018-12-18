var styleTag = document.querySelector('#styleTag');

function writeCode(preFix, code, fn) {
  var domeCode = document.querySelector('#code');
  var n = 0;
  var timeId = setInterval(() => {
    n += 1;
    domeCode.innerHTML = Prism.highlight(preFix + code.slice(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = preFix + code.slice(0, n);
    domeCode.scrollTop = domeCode.scrollHeight;
    if (n >= code.length) {
      window.clearInterval(timeId);
      fn.call();
    }
  }, 0);
}

function writeMarkdown(markdown, fn) {
  var domPaper = document.querySelector('#paper>.content');
  console.log(paper);
  var n = 0;
  var timeId = setInterval(() => {
    n += 1;
    domPaper.innerHTML = markdown.slice(0, n);
    domPaper.scrollTop = domPaper.scrollHeight;
    if (n >= markdown.length) {
      window.clearInterval(timeId);
      fn.call();
    }
  }, 0);
}

var result = `/*
 * 面试官您好，我是吕彬
 * 我将以动画的形式来介绍我自己
 * 只能以文字介绍或许单调了点
 * 那么我就以代码来介绍吧
 * 首先准备下一些样式
 */

* {
  transition: all 1s;
}

html {
  background-color: rgb(222, 222, 222);
  font-size: 16px;
}

#code {
  border: 1px solid red;
  padding: 25px
}

/* 我现在需要代码高亮下 */

.token.selector {
    color: #690;
  }

.token.property {
  color: #905;
}

.token.function {
  color: #dd4a68;
}

/* 现在添加一点3D效果 */

#code {
  transform: rotate(360deg);
}

/* 好了，现在开始正常介绍下我自己吧 */
/* 首先，我需要一张白纸 */
#code {
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
}

#paper {
  position: fixed;
  right: 0;
  width: 50% ;
  height: 100% ;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

#paper > .content {
  background-color: white;
  width: 100%;
  height: 100%;
}
`;

var result2 = `
  `;

var md = `
# 标题1
`;

function creatPaper(fn) {
  var paper = document.createElement('div');
  paper.id = 'paper';
  var content = document.createElement('div');
  content.className = 'content';
  paper.appendChild(content);
  document.body.appendChild(paper);
  fn.call();
}

writeCode('', result, () => {
  creatPaper(() => {
    writeCode(result, result2, () => {
      writeMarkdown(md);
    });
  });
});