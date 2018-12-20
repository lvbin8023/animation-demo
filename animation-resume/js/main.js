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

function creatPaper(fn) {
  var paper = document.createElement('div');
  paper.id = 'paper';
  var content = document.createElement('pre');
  content.className = 'content';
  paper.appendChild(content);
  document.body.appendChild(paper);
  fn.call();
}

function compile(text) {

  //获取要转换的文字
  // var text = document.querySelector(".content").value;
  //创建实例
  var converter = new showdown.Converter();
  //进行转换
  var html = converter.makeHtml(text);
  //展示到对应的地方  result便是id名称
  document.querySelector("pre.content").innerHTML = html;
}

function writeMarkdown(markDown, fn) {
  var domPaper = document.querySelector('#paper>.content');
  var n = 0;
  var timeId = setInterval(() => {
    n += 1;
    domPaper.innerHTML = markDown.slice(0, n);
    domPaper.scrollTop = domPaper.scrollHeight;
    if (n >= markDown.length) {
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
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
}

#paper > .content {
  background-color: white;
  width: 100%;
  height: 100%;
}
`;

var result2 = `
pre.content {
  font-size: 18px;
}
  `;

var md = `
#欢迎使用马克飞象

@(示例笔记本)[马克飞象 | 帮助 | Markdown]

**马克飞象**是一款专为印象笔记（ Evernote）打造的Markdown编辑器，
通过精心的设计与技术实现，配合印象笔记强大的存储和同步功能，
带来前所未有的书写体验。

特点概述：

**功能丰富**：支持高亮代码块、* LaTeX * 公式、流程图，本地图片以及附件上传，
甚至截图粘贴，工作学习好帮手；

**得心应手**：简洁高效的编辑器，提供[桌面客户端][1]以及[离线Chrome App][2]，
支持移动端 Web；

**深度整合**：支持选择笔记本和添加标签，支持从印象笔记跳转编辑，轻松管理。
`;

writeCode('', result, () => {
  creatPaper(() => {
    writeCode(result, result2, () => {
      writeMarkdown(compile(md));
    });
  });
});