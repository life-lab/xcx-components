// pages/customNavCell/customNavCell.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navDataList:[
      {
        image: '/images/football.png',
        textOne: '两个标题的cell，可以跳转',
        textTwo: '这是text2',
        navTo: '/pages/customTabBar/customTabBar' //点击跳转页面
      },
      {
        image: '/images/basketball.png',
        textOne: '一个标题的cell,可以跳转',
        navTo: '/pages/customTabBar/customTabBar' //点击跳转页面
      },
      {
        image: '/images/volleyball.png',
        textOne: '两个标题的cell,不带跳转',
        textTwo: '这是第二个标题',
      },
      {
        image: '/images/baseball.png',
        textOne: '一个标题的cell,不带跳转',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})