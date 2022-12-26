const app = getApp()

Page({
  data: {
    src1:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F59%2F47%2F5bd106414aafc_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628494946&t=d703bd450ffd0d9c5da5e6ebb7cba6e9',
    srcadd:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F59%2F47%2F5bd106414aafc_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628494946&t=d703bd450ffd0d9c5da5e6ebb7cba6e9',
    srcbingo:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F91%2F19%2F5356f15fb4304eb.jpg%21rw400&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632731371&t=3248ecc58df6d24c0696ab3722a82123',
    hidden1:true,
    tab_index: 0,
    add_list:[{index:'0',brand_id:'1',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'1',brand_id:'2',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'2',brand_id:'3',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'3',brand_id:'4',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'4',brand_id:'5',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'5',brand_id:'6',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'6',brand_id:'7',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'7',brand_id:'8',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'8',brand_id:'9',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''},{index:'9',brand_id:'10',code:'',brand_name:'',brand_num1:'',brand_num2:'',brand:''}, 
    ],
    hot_list:[
      {brand_id:1,code:'',brand_name:'hot1',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:2,code:'',code:'',brand_name:'hot2',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:3,code:'',brand_name:'hot3',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:4,code:'',brand_name:'hot4',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:5,code:'',brand_name:'hot5',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:6,code:'',brand_name:'hot6',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:7,code:'',brand_name:'hot7',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:8,code:'',brand_name:'hot8',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:9,code:'',brand_name:'hot9',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:10,code:'',brand_name:'hot10',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:11,code:'',brand_name:'hot11',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
      {brand_id:12,code:'',brand_name:'hot12',brand_num1:'数据1',brand_num2:'数据2',brand_added:'false',brand:'a'},
    ],
    new_list:[{brand_id:1,code:'',brand_name:'new1',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:2,code:'',brand_name:'new2',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:3,code:'',brand_name:'new3',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:4,code:'',brand_name:'new4',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:5,code:'',brand_name:'new5',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:6,code:'',brand_name:'new6',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:7,code:'',brand_name:'new7',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:8,code:'',brand_name:'new8',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:9,code:'',brand_name:'new9',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:10,code:'',brand_name:'new10',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:11,code:'',brand_name:'new11',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
    {brand_id:12,code:'',brand_name:'new12',brand_num1:'数据1',brand_num2:'数据2',brand:'b',brand_added:'false'},
  ],
},
  add:function(e){
    if(e.currentTarget.dataset.added=='false'){
    var id=e.currentTarget.dataset.id-1
    if(e.currentTarget.dataset.brand=='a'){
    var added="hot_list[" + id + "].brand_added"
    }
    else{
      var added="new_list[" + id + "].brand_added"
    }
    this.setData({
      [added]:'true'
    })
    console.log(added)
    if(this.data.add_list[0].brand_name==''){
    const name="add_list[0].brand_name"
    const num1="add_list[0].brand_num1"
    const num2="add_list[0].brand_num2"
    const id="add_list[0].brand_id"
    const brand="add_list[0].brand"
    const code="add_list[0].code"
    
    this.setData({
      [name]:e.currentTarget.dataset.name,
      [num1]:e.currentTarget.dataset.num1,
      [num2]:e.currentTarget.dataset.num2,
      [id]:e.currentTarget.dataset.id,
      [brand]:e.currentTarget.dataset.brand,
      [code]:e.currentTarget.dataset.code,
      hidden1:false,
    })
    }
    else if(this.data.add_list[1].brand_name==''){
      const name="add_list[1].brand_name"
      const num1="add_list[1].brand_num1"
      const num2="add_list[1].brand_num2"
      const id="add_list[1].brand_id"
      const brand="add_list[1].brand"
      const code="add_list[1].code"
      this.setData({
        [name]:e.currentTarget.dataset.name,
        [num1]:e.currentTarget.dataset.num1,
        [num2]:e.currentTarget.dataset.num2,
        [id]:e.currentTarget.dataset.id,
        [brand]:e.currentTarget.dataset.brand,
        [code]:e.currentTarget.dataset.code,
      })
    }
    else{
      const name="add_list[2].brand_name"
      const num1="add_list[2].brand_num1"
      const num2="add_list[2].brand_num2"
      const id="add_list[2].brand_id"
      const brand="add_list[2].brand"
      const code="add_list[2].code"
      this.setData({
        [name]:e.currentTarget.dataset.name,
        [num1]:e.currentTarget.dataset.num1,
        [num2]:e.currentTarget.dataset.num2,
        [id]:e.currentTarget.dataset.id,
        [brand]:e.currentTarget.dataset.brand,
        [code]:e.currentTarget.dataset.code,
      })
    }
    console.log(this.data.hot_list[0])
    console.log(this.data.hot_list[1])
    console.log(this.data.add_list[0])
    console.log(this.data.add_list[1])
  }
  else{
    wx.showToast({
      title: '已添加该股票',
      icon:'fail',
    })
  }
  },
  delete:function(e){
    var id=e.currentTarget.dataset.id-1
    var index=e.currentTarget.dataset.index
    var name="add_list[" + index + "].brand_name"
    var num1="add_list[" + index + "].brand_num1"
    var num2="add_list[" + index + "].brand_num2"
    var brand="add_list[" + index + "].brand"
    var code="add_list[" + index + "].code"
    if(e.currentTarget.dataset.brand=='a'){
      var added="hot_list[" + id + "].brand_added"
      this.setData({
        [added]:'false'
      })
      console.log(this.data.hot_list[0])
      console.log(this.data.hot_list[1])
      console.log(this.data.add_list[0])
    }
      else{
      var added="new_list[" + id + "].brand_added"
      this.setData({
        [added]:'false'
      })
      console.log(this.data.new_list[0])
    }
    this.setData({
      [name]:'',
      [num1]:'',
      [num2]:'',
      [code]:''
    })
  },
  onLoad: function (options) {
    var that=this
    let Promise1=[]
   Promise1.push(new Promise((reslove,reject)=>{
    wx.request({
        url: 'http://api.waizaowang.com/doc/getPoolCX?code=all&fields=p,code,n,zdp&export=1&token=d012d82b338c12f12557aae4f7872a4e',
      success: function (res) {
          for(var j=0;j<=11;j++){
          var newna=res.data.data[j].n
          var newnum1=res.data.data[j].p
          var newnum2=res.data.data[j].zdp
          var newcode=res.data.data[j].code
           that.data.new_list[j].brand_name=newna
           that.data.new_list[j].brand_num1=newnum1
           that.data.new_list[j].brand_num2=newnum2
           that.data.new_list[j].code=newcode
          }
        }
      })
    wx.request({
      url: 'http://api.waizaowang.com/doc/getPoolQS?startDate=2022-05-12&endDate=2100-01-01&fields=n,code,p,zdp&export=1&token=d012d82b338c12f12557aae4f7872a4e',
      
    success: function (res) {
        for(var i=0;i<=11;i++){
        var na=res.data.data[i].n
        var num1=res.data.data[i].p
        var num2=res.data.data[i].zdp
        var hotcode=res.data.data[i].code
         that.data.hot_list[i].brand_name=na
         that.data.hot_list[i].brand_num1=num1
         that.data.hot_list[i].brand_num2=num2
         that.data.hot_list[i].code=hotcode
        }
      }
    })
    reslove();
  }
 ))
   Promise.all(Promise1).then(res=>{
   that.setData({
    hot_list:this.data.hot_list,
    new_list:this.data.new_list
   })
  },
 )
 setTimeout(()=>{
  this.setData({
    hot_list:this.data.hot_list,
    new_list:this.data.new_list
  })
  console.log(1)
 },2000)
 this.systemType()
},
  Stockadd:function(e){
  app.globalData.stockadd=e.detail.value,
  console.log(app.globalData.stockadd)

},
  searchadd:function(e){
    var that=this
    var id=app.globalData.stockadd
    let Promise3=[]
    Promise3.push(new Promise((reslove,reject)=>{
    wx.request({
      url: 'http://api.waizaowang.com/doc/getStockXQHSADayKLine?code='+id+'&ktype=101&fq=0&startDate=2022-04-20&endDate=2100-04-20&fields=zdf,name,code&export=1&token=d012d82b338c12f12557aae4f7872a4e',
    success: function (res) {
        console.log(res.data.data[0].zdf)
        that.data.add_list[5].brand_num2=res.data.data[0].zdf
        that.data.add_list[5].brand_name=res.data.data[0].name
        that.data.add_list[5].code=res.data.data[0].code
        console.log(that.data.add_list[5].brand_num2)

      }
    })
    reslove();
  }
 ))
   Promise.all(Promise3).then(res=>{
   that.setData({
    add_list:this.data.add_list
   })},)
   setTimeout(()=>{
    this.setData({
      add_list:this.data.add_list
    })
    console.log('added')
   },1000)
},

  compare:function(e){
  var code1=this.data.add_list[0].brand_name
  console.log(this.data.add_list[0].code)
  var value=[]
  for(var i=0;i<=5;i++){ 
  if(this.data.add_list[i].code!=''){
    var detail=this.data.add_list[i].code
    value.push(detail)
    console.log(value)
  }}
  app.globalData.compareid=value
  console.log(app.globalData.compareid)
  wx.navigateTo({
    url: '../compareresult/compareresult'
  })
  app.globalData.flagcompare=2
},

  scroll (event) {
    console.log(event)
  },
 
  reactBottom () {
    console.log('触底-加载更多')
  },
 
  // 获取设备屏幕高度
  systemType () {
    wx.getSystemInfo({
      success: (res) => {
        let windowHeight = res.windowHeight
        this.setData({
          windowHeight: windowHeight
        })
      }
    })
  },
 
  tabChange (event) {
    this.setData({
      tab_index: event.detail.current
    })
  },
 
  // tab栏选择
  selectTab (event) {
    this.setData({
      tab_index: event.currentTarget.dataset.index
    })
  },
 
  // 返回顶部
  backTop () {
    let tab_index = this.data.tab_index
 
    this.setData({
      ['scrollTop' + tab_index]: 0
    })
  }, 
})