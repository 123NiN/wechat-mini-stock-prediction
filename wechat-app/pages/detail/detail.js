// pages/detail/detail.js
import {GetnewsDetail} from '../../utils/http'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        newsdata:{},
        xtitle:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('options',options);
        GetnewsDetail({id:options.id}).then(res=>{
            console.log(888,res);
            this.setData({
                newsdata:res.data
            })
            // console.log(this.data.newsdata.title.split('：')[0]);
            this.setData({
                xtitle:this.data.newsdata.title.split('：')[0]
            })
        })
       
        
    },
    getxiaotitle: function () {
        console.log(4445555555);
        console.log(this.data.newsdata);
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log(this.data.newsdata);
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})