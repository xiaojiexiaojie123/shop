// pages/shopCart/shopCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selecteAll: false,
    ageGroup: [
      '5-6岁儿童',
      '7-8岁儿童',
      '8-10岁儿童'
    ],
    ageIndex: 0,
    ageShow: false,
    totalPrice: 0,
    shopCartList: [
      {
        id: 1,
        title: '中老年女装秋冬装加厚保暖T恤上衣妈妈秋装40-50岁大码中长款高领加绒打底衫45岁妈妈装加绒打底衫',
        img: 'http://omsproductionimg.yangkeduo.com/images/2017-10-28/2531e106b23e4a8fa4170168c09f036c.jpeg@1300w_1l_70Q_50sh.webp',
        price: 222,
        count: 1,
        type: '6-8岁儿童',
        selected: false
      },
      {
        id: 2,
        title: '【杭州原版】2018新款毛呢连衣裙套装裙子时尚两件套新娘装敬酒装',
        img: 'http://t00img.yangkeduo.com/goods/images/2018-09-23/eb75a0c8de2fd3d14c36725cf96dcf11.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp',
        price: 222,
        count: 2,
        type: '6-8岁儿童',
        selected: false
      }
    ],
    currentIndex: null
  },
  // 选择商品
  itemSelect (e) {
    console.log(e)
    var id = Number(e.target.dataset.index)
    var shopCartList = this.data.shopCartList
    shopCartList[id].selected = !shopCartList[id].selected
    this.setData({
      shopCartList: shopCartList
    })
    this.totalPrice()
    for (var i = 0, len = shopCartList.length; i < len; i++) {
      if (len !== 0) {
        if (shopCartList[i].selected === false) {
          this.setData({
            selectAll: false
          })
          return
        } else {
          this.setData({
            selectAll: true
          })
        }
      }
    } 
  },
  // 选择全部
  selectAll(e) {
    var selectAll = !this.data.selectAll
    var shopCartList = this.data.shopCartList
    if (selectAll === true) {
      for (var i = 0, len = shopCartList.length; i < len; i++) {
        shopCartList[i].selected = true
      }
    } else {
      for (var i = 0, len = shopCartList.length; i < len; i++) {
        shopCartList[i].selected = false
      }
    }

    this.setData({
      selectAll: selectAll,
      shopCartList: shopCartList
    })
    this.totalPrice()
  },
  // 删除商品
  deleteItem (e) {
    console.log(e)
    var index = Number(e.target.dataset.index)
    console.log(index)
    console.log(this.data.shopCartList)
    var shopCartList = this.data.shopCartList
    shopCartList.splice(index, 1)
    this.setData({
      shopCartList: shopCartList
    })
    this.totalPrice()
  },
  // 减少数量
  decrease (e) {
    console.log(e)
    var index = (Number(e.target.dataset.index))
    var shopCartList = this.data.shopCartList
    var count = shopCartList[index].count
    if (count > 1) {
      shopCartList[index].count = count - 1
      this.setData({
        shopCartList: shopCartList
      }) 
    }
    this.totalPrice()
  },
  // 增加数量
  increase(e) {
    console.log(e)
    var index = (Number(e.target.dataset.index))
    var shopCartList = this.data.shopCartList
    shopCartList[index].count++
    this.setData({
      shopCartList: shopCartList
    })
    this.totalPrice()
  },
  // 总计
  totalPrice () {
    var shopCartList = this.data.shopCartList
    var totalPrice = 0
    for (var i = 0, len = shopCartList.length; i < len; i++) {
      if (shopCartList[i].selected === true) {
        totalPrice += shopCartList[i].count * shopCartList[i].price
      }
    }
    this.setData({
      totalPrice: totalPrice
    })
  },
  // 显示选择器
  showPicker (e) {
    console.log(e)
    var currentIndex = e.target.dataset.index
    this.setData({
      currentIndex: currentIndex,
      ageShow: true
    })
  },
  // 选择年龄段
  selectType (e) {
    console.log(e)
    var groupIndex = Number(e.detail.value)
    var currentIndex = e.target.dataset.index
    var shopCartList = this.data.shopCartList
    var ageGroup = this.data.ageGroup
    shopCartList[currentIndex].type = ageGroup[groupIndex]
    this.setData({
      shopCartList: shopCartList
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
    this.totalPrice()
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