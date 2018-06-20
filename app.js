//app.js
App({
  systemInfo: {},
  onLaunch: function () {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.systemInfo = {
          windowWidth: res.windowWidth,
          screenWidth: res.screenWidth,
          windowHeight: res.windowHeight,
          screenHeight: res.screenHeight,
        }
      },
    })
  }
})