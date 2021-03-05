<template>
  <div id="app">
      <transition :name="SkipSwitchName">
            <router-view />
      </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      SkipSwitchName: "",
    }
  },
  created() {
    // this.func();
    // if(this.browserType==='mobile')this.initFont(document, window);
    this.initFont(document, window);
  },
  watch: {
    $route(to, from) {
      if (to.meta.tx > from.meta.tx) {
        this.SkipSwitchName= "Skleft";
      } else {
        this.SkipSwitchName= "Skright";
      }
    }
  },
  methods: {
    /**
     * @method func 初始化字体(脚本)
     */
    func() {
      var currClientWidth, fontValue, originWidth;
      originWidth = 750; //ui设计稿的宽度，一般750或640
      __resize();

      window.addEventListener("resize", __resize, false);

      function __resize() {
        currClientWidth = document.documentElement.clientWidth;
        console.log(currClientWidth);
        if (currClientWidth > 768) {
          currClientWidth = 768;
        }
        if (currClientWidth < 320) {
          currClientWidth = 320;
        }
        fontValue = ((625 * currClientWidth) / originWidth).toFixed(2);
        document.documentElement.style.fontSize = fontValue + "%";
        console.log(fontValue + "%");
      }
    },
    /**
     * @method initFont 初始化字体(脚本)
     * @param {*} doc HTML DOM Document对象
     * @param {*} window window对象
     */
    initFont(doc, window) {
      // div < body <html <document <window
      var docElement = doc.documentElement;
      //定义两种事件 一种屏幕横屏还是竖屏 缩放 orientationchange监控横屏 resize监控尺寸
      var resize =
        "orientationchange" in window ? "orientationchange" : "resize";
      var func = function () {
        //屏幕的宽度
        var clientWidth = docElement.clientWidth;
        if (!clientWidth) return;
        //如果屏幕大于 >= 750px
        if (clientWidth >= 750) {
          // 给html标签设置字体大小为100px
          docElement.style.fontSize = "100px";
        } else {
          //获取到的屏幕/750px * 100 如果设计噶640px
          docElement.style.fontSize = 100 * (clientWidth / 750) + "px";
        }
      };
      func();
      if (!docElement.addEventListener) return;
      window.addEventListener(resize, func, false);
      docElement.addEventListener("DOMContentLoaded", func, false);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100vh;
  font-size: 0.28rem;
  /* 兼容ie10与火狐 */
  /* 去除滚动条 */
  /* -ms-overflow-style: none;
  overflow: -moz-scrollbars-none; */
}
/* 去除滚动条 */
body::-webkit-scrollbar {
  width: 0 !important;
}
#app{
  position: relative;
  height: 100%;
}
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
}
/* 页面过度动画 */
.Skright-enter-active,
.Skright-leave-active,
.Skleft-enter-active,
.Sklef-leave-active {
  transition: all 600ms;
}
.Skright-enter {
  transform: translate3d(-100%, 0, 0);
}
.Skright-leave-to {
  transform: translate3d(100%, 0, 0);
}
.Skleft-enter {
  transform: translate3d(100%, 0, 0);
}
.Skleft-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
