const app = getApp()
import * as echarts from '../../ec-canvas/echarts';

Page({
  data: {
    date01:'2019-6-1',
    date02: '2019-6-21',
    //折现属性
    series:[
      {
        data:[],
        name:'',
        smooth:false,
        symbolSize:0.1,
        itemStyle: {
        normal: {
            lineStyle: {
              width:0.2// 0.1的线条是非常细的了，这是蓝色的数据线粗细
            }
        }
        },
        type:'line'
      }, {
        data: [],
        name: '',
        smooth: false,
        symbolSize:0.1,
        itemStyle: {
          normal: {
              lineStyle: {
                width:0.3// 0.1的线条是非常细的了，这是浅红色的粗细
              }
          }
        },
        type: 'line'
      }, {
        data: [],
        name: '',
        smooth: false,
        symbolSize:0.1,
        itemStyle: {
          normal: {
              lineStyle: {
                width:0.3// 0.1的线条是非常细的了，这是浅红色的粗细
              }
          }
        },
        type: 'line'
      }, {
        data:[],
        name: '',
        smooth: false,
        symbolSize:0.1,
        itemStyle: {
          normal: {
              lineStyle: {
                width:0.3// 0.1的线条是非常细的了，这是浅红色的粗细
              }
          }
        },
        type: 'line'
      }
    ],
    // 默认7天
    ascissaData:(['2022-03-01', '2022-03-02', '2022-03-03', '2022-03-04', '2022-03-07', '2022-03-08', '2022-03-09', '2022-03-10', '2022-03-11', '2022-03-14', '2022-03-15', '2022-03-16', '2022-03-17', '2022-03-18', '2022-03-21', '2022-03-22', '2022-03-23', '2022-03-24', '2022-03-25', '2022-03-28', '2022-03-29', '2022-03-30', '2022-03-31', '2022-04-01', '2022-04-06', '2022-04-07', '2022-04-08', '2022-04-11', '2022-04-12', '2022-04-13', '2022-04-14', '2022-04-15', '2022-04-18', '2022-04-19', '2022-04-20']).reverse(),
    ec: {
      lazyLoad: true
    },   
    stockid:'', 
  },
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      Chart.setOption(this.getOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  getOption: function () {
    var that = this
    console.log(that.data.series)
    console.log(that.data.ascissaData)
    var legendList = []
    for (var i in that.data.series) {
      var obj = {
        name: that.data.series[i].name,
        icon: 'circle',
        textStyle: {
          color: '#000000',
        }
      }
      legendList.push(obj)
      that.data.series[i].data.reverse()
    }
    var option = {
      color: ["#37A2DA", "#FF3399","#99FF33", "#CCFF00"],
      /* 折线介绍文字设置 */
      legend: {
        itemWidth: 5, 
        itemGap: 25,
        selectedModel: 'single', 
        inactiveColor: 'red',
        data: legendList,
        bottom: 0,
        left: 30,
        z: 100
      },
      grid: {
        containLabel: true
      },
      
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: that.data.ascissaData.reverse(),
      },
      yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLine: { //y轴坐标是否显示
          show: false
        },
        axisTick: { //y轴刻度小标是否显示
          show: false
        }
      },
      series: that.data.series
    }
    return option
  },

  onLoad: function(options) {
    console.log(app.globalData.compareid)
    var that=this;
    this.data.stockid=app.globalData.stockid
    /*下：调用接口获得对应时间内的实际股票涨跌百分比数据*/
   var id=app.globalData.compareid
    console.log(id[0])
    wx.request({
      url: 'http://api.waizaowang.com/doc/getStockXQHSADayKLine?code='+id[0]+'&ktype=101&fq=0&startDate=2022-03-01&endDate=2022-04-20&fields=zdf,name&export=1&token=d012d82b338c12f12557aae4f7872a4e',
      success: function (res) {//这里写调用接口失败之后所运行的函数
        var value=[]
        for(var i=0;i<35;i++){
        value.push(res.data.data[i].zdf)
        }
        that.data.series[0].data=value.reverse()
        that.data.series[0].name=res.data.data[0].name
        console.log(that.data.series[0].data) 
      }
    })
    wx.request({
      url: 'http://api.waizaowang.com/doc/getStockXQHSADayKLine?code='+id[1]+'&ktype=101&fq=0&startDate=2022-03-01&endDate=2022-04-20&fields=zdf,name&export=1&token=d012d82b338c12f12557aae4f7872a4e',
      success: function (res) {//这里写调用接口失败之后所运行的函数
        var value=[]
        for(var i=0;i<35;i++){
        value.push(res.data.data[i].zdf)    
        }
        that.data.series[1].name=res.data.data[0].name
        that.data.series[1].data=value.reverse()
        console.log(that.data.series[1].data) 
      }
    })
    wx.request({
      url: 'http://api.waizaowang.com/doc/getStockXQHSADayKLine?code='+id[2]+'&ktype=101&fq=0&startDate=2022-03-01&endDate=2022-04-20&fields=zdf,name&export=1&token=d012d82b338c12f12557aae4f7872a4e',
      success: function (res) {//这里写调用接口失败之后所运行的函数
        var value=[]
        for(var i=0;i<35;i++){
        value.push(res.data.data[i].zdf)    
        }
        that.data.series[2].data=value.reverse()
        that.data.series[2].name=res.data.data[0].name
        console.log(that.data.series[2].data) 
      }
    })
    wx.request({
      url: 'http://api.waizaowang.com/doc/getStockXQHSADayKLine?code='+id[3]+'&ktype=101&fq=0&startDate=2022-03-01&endDate=2022-04-20&fields=zdf,name&export=1&token=d012d82b338c12f12557aae4f7872a4e',
      success: function (res) {//这里写调用接口失败之后所运行的函数
        var value=[]
        for(var i=0;i<35;i++){
        value.push(res.data.data[i].zdf)    
        }
        that.data.series[3].data=value.reverse()
        that.data.series[3].name=res.data.data[0].name
        console.log(that.data.series[3].data) 
      }
    })
    that.echartsComponnet = this.selectComponent('#mychart');
    if(app.globalData.flagcompare==2){
      console.log('加载对比数据')
    setTimeout(()=>{
      that.init_echarts()
      console.log(1)
    },4000)}
  },
})