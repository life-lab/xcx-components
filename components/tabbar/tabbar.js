// components/tabbar.js
// 位于顶部的自定义tabbar组件，只添加了fixed属性，基本参数和小程序自带的tabbar相同
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: JSON,
      value: {}
    },
    selectIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectTabBar: function(e){
      var index = e.currentTarget.dataset.index;
      if (index == this.data.selectIndex) {
        return;
      }
      this.setData({
        selectIndex: index
      });
      this.triggerEvent('switchTab', {index: index})
    }
  }
})
