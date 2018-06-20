//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabbar: {
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
    },
    dataList: [
      {
        nav: "/pages/customTabBar/customTabBar",
        name: "自定义tabbar"
      },
      {
        nav: "/pages/customNavCell/customNavCell",
        name: "自定义navCell"
      },
      {
        nav: "/pages/customlistCard/customlistCard",
        name: "自定义跳转选项卡"
      }
    ]
  },

  onLoad: function () {
  }
})
