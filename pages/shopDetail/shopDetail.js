// pages/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["商品详情", "评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    count: 1, // 购买数量
    types: [
      { title: '好评', num: 200 },
      { title: '中评', num: 20 },
      { title: '差评', num: 2 }
    ],
    typeIndex: 0
  },

  // 改变评论类型
  changeType (e) {
    console.log(e)
    var typeIndex = e.currentTarget.dataset.index
    console.log(typeIndex)
    this.setData({
      typeIndex: typeIndex
    })
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 减少数量
  decrease(e) {
    console.log(e)
    var count = this.data.count - 1
    if (count > 0) {
      this.setData({
        count: count
      })
    }
  },
  // 增加数量
  increase(e) {
    console.log(e)
    var count = this.data.count + 1
    this.setData({
      count: count
    })
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