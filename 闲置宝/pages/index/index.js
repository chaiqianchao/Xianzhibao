Page({
  data: {
    resoutuijian:null,
    jingpinhaoshu:null,
    xinshuremai:null,
    jikemiaosha: null,
    ershouzhuanqu: null,
  },
  search_page:function(){
    wx.navigateTo({
      url: '../search_page/search_page',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad(e) {
    var that = this;
    this.setData({
      msgList: [
        { url: "url", title: "公告：欢迎来到肥肥怪的书吧" },
        { url: "url", title: "公告：新优惠推出哦，点我查看！" },
        { url: "url", title: "公告：夏日炎炎" }]
    });
    //热搜推荐前三个数据抓取
    wx.request({
      url: 'https://www.ffgbookbar.cn/BookStoreProject/public/store.php/showBooks',
      data: { isAll: 1, 'type': 1 },
      method: 'GET',
      header: { "content-type": "application/json" },
      success: function (res) {
        var resoutuijian = res.data.reverse();
        that.setData({
          resoutuijian: resoutuijian
        });
      }
    });
    //精品好书前三个数据抓取
    wx.request({
      url: 'https://www.ffgbookbar.cn/BookStoreProject/public/store.php/showBooks',
      data: { isAll: 1, 'type': 2 },
      method: 'GET',
      header: { "content-type": "application/json" },
      success: function (res) {
        var jingpinhaoshu = res.data.reverse();
        that.setData({
          jingpinhaoshu: jingpinhaoshu
        });
      }
    });
    //新书热卖前三个数据抓取
    wx.request({
      url: 'https://www.ffgbookbar.cn/BookStoreProject/public/store.php/showBooks',
      data: { isAll: 1, 'type': 3 },
      method: 'GET',
      header: { "content-type": "application/json" },
      success: function (res) {
        var xinshuremai = res.data.reverse();
        that.setData({
          xinshuremai: xinshuremai
        });
      }
    });
    //即刻秒杀前三个数据抓取
    wx.request({
      url: 'https://www.ffgbookbar.cn/BookStoreProject/public/store.php/showBooks',
      data: { isAll: 1, 'type': 4 },
      method: 'GET',
      header: { "content-type": "application/json" },
      success: function (res) {
        var jikemiaosha = res.data.reverse();
        that.setData({
          jikemiaosha: jikemiaosha
        });
      }
    });
    //二手专区前三个数据抓取
    wx.request({
      url: 'https://www.ffgbookbar.cn/BookStoreProject/public/store.php/showBooks',
      data: { isAll: 1, 'type': 5 },
      method: 'GET',
      header: { "content-type": "application/json" },
      success: function (res) {
        var ershouzhuanqu = res.data.reverse();
        that.setData({
          ershouzhuanqu: ershouzhuanqu
        });
      }
    });
  }, 
  toDetail:function(e){
    var bookid = e.currentTarget.dataset.bookid;
    console.log("您刚点击的书本id为："+bookid);
    wx.navigateTo({
      url: '../others/details/details?bookid=' + bookid,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  resoutuijian:function(){
    wx.switchTab({
      url: '../fenlei/fenlei',
    })
  },
  jingpinhaoshu:function(){
    wx.switchTab({
      url: '../fenlei/fenlei',
    })
  },
  xinshuremai: function () {
    wx.switchTab({
      url: '../fenlei/fenlei',
    })
  },
  onShareAppMessage: function (res) {    
    if(res.from === "menu"){
      console.log("来自右上角转发菜单")
    }
    return {
      title: "肥肥怪书吧",
      path: '/pages/index/index',
      imageUrl: "https://www.ffgbookbar.cn/BookStoreProject/public/index.png",
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  },


})