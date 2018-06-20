// components/navCellOne/navCellone.js
var app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: JSON,
      value: {}
    },
    cellHeight: {
      type: Number,
      value: 100
    },
    imageSize: {
      type: JSON,
      value: {
        leftImage: {
          width: 40,
          height: 40
        },
        rightImage: {
          width: 10
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    systemInfo: app.systemInfo
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
