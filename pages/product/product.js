Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    wx.showNavigationBarLoading();
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#479823',
      animation: {
        duration: 4000,
        timingFunc: 'easeIn'
      }
    })
  },
  
})