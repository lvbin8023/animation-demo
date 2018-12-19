! function () {
  var duration = 50;

  $('.actions').on('click', 'button', function (event) {
    var $button = $(event.currentTarget);
    var $speed = $button.attr('data-speed');
    console.log($speed);
    $button.addClass('active').siblings('.active').removeClass('active');
    switch ($speed) {
      case 'slow':
        duration = 100;
        break;
      case 'normal':
        duration = 50;
        break;
      case 'fast':
        duration = 10;
        break;
      default:
        break;
    }
  });

  function writeCode(preFix, code, fn) {
    var container = document.querySelector('#code');
    var styleTag = document.querySelector('#styleTag');
    var n = 0;
    setTimeout(function run() {
      n += 1;
      container.innerHTML = preFix + code.slice(0, n);
      styleTag.innerHTML = preFix + code.slice(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        setTimeout(run, duration);
      } else {
        fn.call();
      }
    }, duration);
  }

  var realCode = `
  /* 
   * 首先，准备画皮卡丘的皮肤
  */

  .preview {
    height: 100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee433;
  }

  .wrapper {
    width: 100% ;
    height: 180px;
    position: relative;
  }

  .wrapper > :not(:last-child) {
      z-index: 1;
    }

  /* 
   * 接下来，画皮卡丘的鼻子
  */

  .nose {
    width: 0px;
    height: 0px;
    border: 11px solid;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50% ;
    top: 28px;
    margin-left: -12px;
  }

  /* 
   * 接下来，画皮卡丘的眼睛
  */

  .eye {
    width: 49px;
    height: 49px;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
  }

  /* 
   * 接下来，画皮卡丘的眼珠
  */

  .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: white;
    position: absolute;
    border-radius: 50% ;
    left: 6px;
    top: 0px;
    border: 2px solid #000;
  }

  /* 
   * 接下来，画皮卡丘的左眼
  */
  
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }

  /* 
   * 接下来，画皮卡丘的右眼
  */

  .eye.right {
    left: 50%;
    margin-left: 90px;
  }

  /* 
   * 接下来，画皮卡丘的脸蛋
  */
  
  .face {
    width: 68px;
    height: 68px;
    background-color: #fc0d1c;
    border-radius: 50% ;
    position: absolute;
    top: 85px;
  }

  /* 
   * 接下来，画皮卡丘的脸蛋左边的红晕
  */

  .face.left {
    right: 50% ;
    margin-right: 116px;
  }

  /* 
   * 接下来，画皮卡丘的脸蛋右边的红晕
  */
  
  .face.right {
    left: 50% ;
    margin-left: 116px;
  }

  /* 
   * 接下来，画皮卡丘的嘴唇
  */

  .upperLip {
    height: 25px;
    width: 80px;
    background-color: #fee433;
    border: 2px solid black;
    position: absolute;
    top: 50px;
  }

  /* 
   * 接下来，画皮卡丘的左边的嘴唇
  */

  .upperLip.left {
    right: 50% ;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-left: none;
    border-right: none;
    transform: rotate(-20deg);
  }

  /* 
   * 接下来，画皮卡丘的右边的嘴唇
  */

  .upperLip.right {
    left: 50% ;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    border-right: none;
    transform: rotate(20deg);
  }

  /* 
   * 接下来，画皮卡丘的下嘴唇
  */

  .lowerLip-wrapper {
    position: absolute;
    bottom: 0;
    left: 50% ;
    margin-left: -150px;
    width: 300px;
    height: 120px;
    overflow: hidden;
  }

  .lowerLip {
    width: 300px;
    height: 3500px;
    background-color: #993513;
    border-radius: 250px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }

  /* 
   * 最后，把皮卡丘的舌头也画出来
  */

  .lowerLip::before {
    content: '';
    bottom: -2px;
    width: 100px;
    height: 100px;
    background-color: #fc4a62;
    border-radius: 50px;
    position: absolute;
    left: 50% ;
    margin-left: -50px;
  }

  好啦！可爱的皮卡丘我们终于画好啦！
  送给同样可爱的你们！n( * ≧▽≦ * ) n `;
  writeCode('', realCode);
}.call();