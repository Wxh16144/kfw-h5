/**
 *  对于axios的进一步封装
 *  @desc: 契合公司开发流程以及vue开发模板，对axios进行进一步分装
 **/

// 加载axios
import axios from 'axios'
// 加载本地配置文件
import configs from '../../configs/api'
import systems from '../../configs'
// 导入全局配置
import './config.js'
// 获取请求地址域名以及接口列表
const {baseUrl, api} = configs

// 验证参数必须为object
// arg 为object时返回true, 否则返回false
const verifyObject = function (arg) {
  return (arg instanceof Array ? false : arg instanceof Object)
}
// 处理回调参数
const handleResponse = function (res) {
  return (res.data ? res.data : null)
}
// core
export default {
  post (name, params, options = {}) {
    // 验证name参数, 必填参数
    if (name == null) {
      throw new Error(`
            error arguments: name is undefined,
            please check your function.
        `)
    }
    // 验证所使用的方法是否被配置
    if (api[name] == null) {
      throw new Error(`
            error arguments: name is not configured,
            please check '@/configs/api.js'.`)
    }
    // 验证参数格式，必须为 Object或者为formData对象
    if (!verifyObject(params) && !(params instanceof FormData)) {
      throw new Error(`
                error arguments: params must be Object or FormData.
            `)
    }

    // 根据默认参数进行ajax请求
    return axios.post(`${api[name]}`, params, options).then(res => handleResponse(res))
  },
  get (name, params) {
    // 验证name参数, 必填参数
    if (name == null) {
      throw new Error(`
            error arguments: name is undefined,
            please check your function.
        `)
    }
    if (api[name] == null) {
      throw new Error(`
            error arguments: name is not configured,
            please check '@/configs/api.js'.`)
    }
    // 验证参数格式，必须为 Object
    if (!verifyObject(params)) {
      throw new Error(`
                error data format: must be object.
            `)
    }

    // 根据默认参数进行ajax请求根据默认参数进行ajax请求
    return axios.get(systems.debug ? `${api[name]}` : `${baseUrl}${api[name]}`, {
      params
    }).then(res => handleResponse(res))
  }
}
