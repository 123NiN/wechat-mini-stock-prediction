App({
  
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

  },
 
  globalData: {
    flagcompare:1,
    userInfo: 111,
    stockid:'000001',
    stockadd:'',
    globalData0:'10002',
    compareid:['000029','000416'],
    canIUseOpenData:false,
    canIUseGetUserProfile: false,
    hasUserInfo: false,
    addflagid:[],
    addflagname:[]
  }
})
