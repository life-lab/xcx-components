// pages/customTabBar/customTabBar.js
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

  onLoad: function (options) {
  
  },

  switchTab: function(e) {
    let index = e.detail.index
    wx.showToast({
      title: '点击的位置是:' + index
    })
  }
})