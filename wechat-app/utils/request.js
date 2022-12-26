// 封装请求
  const  ajax = (url,method,data)=>{
  // 显示loading 
   wx.showLoading({
     title: '加载中',
   })
   return new Promise((resolve,reject)=>{
     wx.request({
       url: url, //仅为示例，并非真实的接口地址
       data:data,
       method:method,
       header: {
         'content-type': 'application/json' // 默认值
       },
       success (res) {
         // console.log(res.data)
         resolve(res.data)
         // 隐藏loading
         wx.hideLoading()
       },
       fail(err){
         reject(err)
       }
     })
   })
}

export default ajax