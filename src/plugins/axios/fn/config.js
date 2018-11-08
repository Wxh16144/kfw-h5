/**
 *  axios 配置文件
 *  @desc: 配置ajax headers request Response 数据预处理
 *  @author: helloLaoYang<aaron@codonas.cn>
 */

import Vue from 'vue'
import Qs from 'qs'
import axios from 'axios'
// import systems from '@/configs'
import configs from '../../configs/api'

const { baseUrl } = configs
// 确认默认链接
axios.defaults.baseURL = baseUrl

// 初始化post header
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
// axios.defaults.withCredentials = true;

/*
* todo: 预处理Requests数据
* desc: 进行数据转换，添加默认字段等
* @return data;
**/
axios.defaults.transformRequest = function _transformRequest (params = {}) {
  const auth = localStorage.getItem('auth')
  // Object.assign({auth: auth}, params);
  // 返回完整数据，请求ajax
  return Qs.stringify(Object.assign({ auth: auth }, params))
}

/*
* todo: 预处理Response数据
* desc: 可以进行返回码操作
* @return data || null;
**/
axios.defaults.transformResponse = function _transformResponse (res) {
  // 处理返回数据
  try {
    res = JSON.parse(res)
    // 判断返回值是否为对象
    if (typeof res !== 'object') {
      Vue.$toast({
        message: '服务器有问题！',
        position: 'middle',
        duration: 2000
      })
    }
  } catch (e) {
    Vue.$toast({
      message: '服务器有问题！',
      position: 'middle',
      duration: 2000
    })
    return null
  }
  // 返回object对象到response[data]
  // console.log(res);
  // if(typeof res.status === 'boolean') {
  //     if (!res.status) {
  //       Vue.$toast({
  //         message: res.info,
  //         position: 'bottom',
  //         duration: 2000
  //       });
  //       return null;
  //     } else {
  //       return res;
  //     }
  // } else {
  //   if ( Number(res.status) !== 200 && Number(res.status) !== 1107) {
  //       Vue.$toast({
  //         message: res.info,
  //         position: 'bottom',
  //         duration: 2000
  //       });
  //       return null;
  //     } else {
  return res
  // }
  // }
}
