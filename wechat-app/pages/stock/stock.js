const app = getApp()
import * as echarts from '../../ec-canvas/echarts';
// K线图所用颜色
var upColor = '#fdbc07';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';

// 椭圆形标识参数
var val = [
  {
    name: 'XX标点',
    coord: ['2013/5/31', 2300],
    value: 2300,
    itemStyle: {
      normal: { color: '#4a8aff' }
    }
  },
  {
    name: 'highest value',
    type: 'max',
    valueDim: 'highest'
  },
  {
    name: 'lowest value',
    type: 'min',
    valueDim: 'lowest'
  },
  {
    name: 'average value on close',
    type: 'average',
    valueDim: 'close'
  }
]
Page({
  data: {
    data0 :[],
    addflag:'添加',
    ec: {
    },
    stockid:'',
    stockname:'',
    stockopen:'',
    stockclose:'',
    stockhigh:'',
    stocklow:'',
  },

  onLoad: function (options) {
    this.data.stockid=app.globalData.stockid
    this.data.data0=this.splitData([
      ['2022-04-18'],
      ['2022-04-19'],
      ['2022-04-20'],
      ['2022-04-21'],
      ['2022-04-22'],
      ['2022-04-21'],
      ['2022-04-22'],
     ]);
    console.log(1)
     this.setData({
      // k线图
      ec: {
        onInit: this.initChart
      },
      
    })
    var that=this
    wx.request({
      url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate=2022-04-18&endDate=2022-04-18&fields=name,open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
      success: function (res) {//这里写调用接口失败之后所运行的函数
        console.log(res.data);
      var stockname=res.data.data[0].name
      var stockopen=res.data.data[0].open
      var stockclose=res.data.data[0].close
      var stockhigh=res.data.data[0].high
      var stocklow=res.data.data[0].low
       that.setData({
        stockname:stockname,
        opendata:stockopen,
        closedata:stockclose,
        highdata:stockhigh,
        lowdata:stocklow
      }) 
       console.log(stockname) 
      } 
    })
/*   以上为调用对应股票的函数   */

},
addflag:function(){
  var value=this.data.stockid
  var value1=this.data.stockname
  app.globalData.addflagid.push(value)
  app.globalData.addflagname.push(value1)
 this.setData({
   addflag:'已添加'
 })
},
  initChart: function (canvas, width, height) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    });
    canvas.setChart(chart);
    var option = {
      backgroundColor: '#0F2127',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        // 鼠标点击时触发
        triggerOn: 'click',
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
          color: '#000',
          // fontSize: 13,
        },
        // 避免提示框超出方块圈的情况
        position: function (pos, params, el, elRect, size) {
          var obj = { top: 10 };
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
          return obj;
        },
      },
      legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
      },
      grid: {
        left: '13%',
      },
      xAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            // fontSize: 13,
          }
        },
        type: 'category',
        data: this.data.data0.categoryData,
        scale: true,
        axisTick: { show: false },
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      },
      yAxis: {
        splitLine: { show: false },//去除网格线
        axisLabel: {
          textStyle: {
            color: '#fff',
            // fontSize: 13
          }
        },
        scale: true,
      },
      dataZoom: [
        {
          type: 'slider',
          height: 10,
          show: true,
          start: 80,
          end: 100,
          handleSize: 8
        },
        {
          type: 'inside',
          start: 80,
          end: 100
        },
      ],
      series: [
        {
          name: '日K',
          type: 'candlestick',
          data: this.data.data0.values,
          itemStyle: {
            normal: {
              color: upColor,
              color0: downColor,
              borderColor: upBorderColor,
              borderColor0: downBorderColor
            }
          },
          markPoint: {
            label: {
              normal: {
                formatter: function (param) {
                  return param != null ? Math.round(param.value) : '';
                }
              }
            },
            data: val,
            tooltip: {
              formatter: function (param) {
                return param.name + '<br>' + (param.data.coord || '');
              }
            }
          },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              [
                {
                  name: 'from lowest to highest',
                  type: 'min',
                  valueDim: 'lowest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                },
                {
                  type: 'max',
                  valueDim: 'highest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                }
              ],
              {
                name: 'min line on close',
                type: 'min',
                valueDim: 'close'
              },
              {
                name: 'max line on close',
                type: 'max',
                valueDim: 'close'
              }
            ]
          }
        },
        {
          name: 'MA5',
          type: 'line',
          data: this.calculateMA(5),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: 'MA10',
          type: 'line',
          data: this.calculateMA(10),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: 'MA20',
          type: 'line',
          data: this.calculateMA(20),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: 'MA30',
          type: 'line',
          data: this.calculateMA(30),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },

      ]
    };
    chart.setOption(option);
    return chart;
  },
  splitData:function(rawData) {
      var values0 = [];
      var values1 = [];
      var values2 = [];
      var values3 = [];
      var values4 = [];
      var values5 = [];
      var values6 = [];
      var values=[]
      wx.request({
        url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate='+rawData[0]+'&endDate='+rawData[0]+'&fields=open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
        header: {
          'content-type': 'application/json' // 默认值
          },
        success: function (res) {//这里写调用接口之后所运行的函
           values0.push(res.data.data[0].open)
           values0.push(res.data.data[0].close)
           values0.push(res.data.data[0].low)
           values0.push(res.data.data[0].high)
           console.log(values0)
        },
      })
      wx.request({
        url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate='+rawData[1]+'&endDate='+rawData[1]+'&fields=open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
        header: {
          'content-type': 'application/json' // 默认值
          },
        success: function (res) {//这里写调用接口之后所运行的函
           values1.push(res.data.data[0].open)
           values1.push(res.data.data[0].close)
           values1.push(res.data.data[0].low)
           values1.push(res.data.data[0].high)
           console.log(values1)
        },
      })
      wx.request({
        url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate='+rawData[2]+'&endDate='+rawData[2]+'&fields=open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
        header: {
          'content-type': 'application/json' // 默认值
          },
        success: function (res) {//这里写调用接口之后所运行的函
           values2.push(res.data.data[0].open)
           values2.push(res.data.data[0].close)
           values2.push(res.data.data[0].low)
           values2.push(res.data.data[0].high)
           console.log(values2)
        },
      })
      wx.request({
        url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate='+rawData[3]+'&endDate='+rawData[3]+'&fields=open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
        header: {
          'content-type': 'application/json' // 默认值
          },
        success: function (res) {//这里写调用接口之后所运行的函
           values3.push(res.data.data[0].open)
           values3.push(res.data.data[0].close)
           values3.push(res.data.data[0].low)
           values3.push(res.data.data[0].high)
           console.log(values3)
        },
      })
      wx.request({
        url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate='+rawData[4]+'&endDate='+rawData[4]+'&fields=open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
        header: {
          'content-type': 'application/json' // 默认值
          },
        success: function (res) {//这里写调用接口之后所运行的函
           values4.push(res.data.data[0].open)
           values4.push(res.data.data[0].close)
           values4.push(res.data.data[0].low)
           values4.push(res.data.data[0].high)
           console.log(values4)
        },
      })
      wx.request({
        url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate='+rawData[5]+'&endDate='+rawData[5]+'&fields=open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
        header: {
          'content-type': 'application/json' // 默认值
          },
        success: function (res) {//这里写调用接口之后所运行的函
           values5.push(res.data.data[0].open)
           values5.push(res.data.data[0].close)
           values5.push(res.data.data[0].low)
           values5.push(res.data.data[0].high)
           console.log(values5)
        },
      })
      wx.request({
        url:'http://api.waizaowang.com/doc/getDayKLine?type=1&code='+this.data.stockid+'&ktype=101&fq=0&startDate='+rawData[6]+'&endDate='+rawData[6]+'&fields=open,high,low,close&export=1&token=d012d82b338c12f12557aae4f7872a4e',
        header: {
          'content-type': 'application/json' // 默认值
          },
        success: function (res) {//这里写调用接口之后所运行的函
           values6.push(res.data.data[0].open)
           values6.push(res.data.data[0].close)
           values6.push(res.data.data[0].low)
           values6.push(res.data.data[0].high)
           console.log(values6)
        },
      })
      values.push(values0)
      values.push(values1)
      values.push(values2)
      values.push(values3)
      values.push(values4)
      values.push(values5)
      values.push(values6)
      console.log(values)
    
    var categoryData = [];
    for(var j= 0; j < rawData.length; j++){
       categoryData.push(rawData[j].splice(0, 1)[0]);
       
    }
    console.log(values)
    return {
      categoryData: categoryData,
      values: values
    };
  },
  calculateMA: function(dayCount) {
    var result = [];
    for (var i = 0, len = this.data.data0.values.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
        sum += this.data.data0.values[i - j][1];
      }
      result.push(sum / dayCount);
    }
    return result;
  },
  yuce:function(e){
    wx.navigateTo({
      url: '../yuce/yuce'
    })
  }
})
