var app=getApp();
import {
  GetnewsHot,
  GetnewsList,
} from '../..//utils/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false,
    /**以上为获取个人用户所需信息 **/
    stock:'',
    newsHotdata: [],
    newsdataList:[],
    page:1,
    last_page:2,
  },
  getNewsList:function(){
    GetnewsList({page:this.data.page}).then((res)=>{
        console.log('新闻列表',res);
        let new_data = res.data.data
        this.setData({
            newsdataList: this.data.newsdataList.concat(new_data),
            last_page:res.data.last_page
        })
        console.log(667777,this.data.newsdataList);
    })
},

// 跳转到详情页
tapHandler(event){
    // 获取新闻id
    console.log(888,event);
    console.log(888,event.currentTarget.dataset.id);
    wx.navigateTo({
        url:"/pages/detail/detail?id="+event.currentTarget.dataset.id
     })
},
  Stock:function(e){
    app.globalData.stockid=e.detail.value,
    console.log(app.globalData.stockid)
  },
  search:function(e){
    wx.navigateTo({
      url: '../stock/stock'
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindViewTap() {/* tzy 点击头像得到的响应登录 tzy */
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  searchname:function(e){
    this.setData({
      searchname:e.detail.value
    })
  },
  onReachBottom: function () {
    console.log('触底啦');
    this.setData({
        page:this.data.page+1
      })
    // 加载下一页数据
    if(this.data.page<=this.data.last_page){
        console.log('this.data.page',this.data.page);
        this.getNewsList()
    }
},
  onLoad: function (options) {
    // 获取热点新闻
    GetnewsHot(null).then((res) => {
      console.log('热点新闻', res);
      this.setData({
          newsHotdata: res.data,
      })
  });
   // 获取新闻列表
  this.getNewsList()
    console.log(1)
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
})