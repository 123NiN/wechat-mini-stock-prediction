const wxUserProfile = () => {
  return new Promise((reslove,reject) => {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        reslove(res.userInfo)
        
      }
    })
  })
}

export default wxUserProfile