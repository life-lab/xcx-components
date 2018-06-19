//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "tabbar": {
      color: "#566270",
      selectedColor: "#3aa7ff",
      backgroundColor: "#ffffff",
      list: [
        {
          text: "首页"
        },
        {
          text: "第二页"
        }
      ]
    }
  },

  onLoad: function () {
  }
})
