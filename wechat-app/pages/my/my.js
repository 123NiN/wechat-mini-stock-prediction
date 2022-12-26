const app = getApp()
Page({
  data: {
    addflag_list:[{index:'0',code:'',brand_name:''},{index:'1',code:'',brand_name:''},{index:'2',code:'',brand_name:''},{index:'3',code:'',brand_name:''},{index:'4',code:'',brand_name:''}
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData:false,
    /**以上为获取个人用户所需信息 **/
    
    tab_index: 0,
    hot_list:[
      {
      brand_id:1,
      brand_name:'hot1',
      brand_num1:'数据1',
      brand_num2:'数据2',
     },
     {
      brand_id:2,
      brand_name:'hot2',
      brand_num1:'数据1',
      brand_num2:'数据2',
     },
     {
      brand_id:3,
      brand_name:'hot3',
      brand_num1:'数据1',
      brand_num2:'数据2',
     },
  ]
  },
  bindViewTap() {/* tzy 点击头像得到的响应登录 tzy */
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserProfile(e) {/* tzy 获取用户信息函数 tzy */
    wx.getUserProfile({
      desc: '展示用户信息',
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
  onLoad: function (options) {
    
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.systemType()
  },
  onShow:function(option){
  for(var i=0;i<5;i++){
    this.data.addflag_list[i].brand_name=app.globalData.addflagname[i]
    this.data.addflag_list[i].code=app.globalData.addflagid[i]
  }
  console.log(app.globalData.addflagid)
  this.setData({
    addflag_list:this.data.addflag_list
  })
  },
  delete:function(e){
    var id=e.currentTarget.dataset.id-1
    var index=e.currentTarget.dataset.index
    var name="addflag_list[" + index + "].brand_name"
    var code="addflag_list[" + index + "].code"
    this.setData({
      [name]:'',
      [code]:''
    })
  },
  scroll (event) {
    console.log(event)
  },
  reactBottom () {
    console.log('触底-加载更多')
  },
  systemType () {
    wx.getSystemInfo({
      success: (res) => {
        let windowHeight = res.windowHeight
 
        this.setData({
          windowHeight: windowHeight
        })
 
        console.log(res)
      }
    })
  },
 
  tabChange (event) {
    this.setData({
      tab_index: event.detail.current
    })
  },
  selectTab (event) {
    this.setData({
      tab_index: event.currentTarget.dataset.index
    })
  },
  backTop () {
    let tab_index = this.data.tab_index
 
    this.setData({
      ['scrollTop' + tab_index]: 0
    })
  },
})