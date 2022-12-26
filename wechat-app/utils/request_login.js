const wxLogin = () => {
  return new Promise((reslove,reject) => {
    wx.login({
      success(res) {
        if (res.code) {
          reslove(res.code)
        }
        else {
          reject({ message: "登录失败" })
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export default wxLogin