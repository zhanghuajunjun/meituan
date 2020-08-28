// 用来封装请求
import service from './index'


export default {
  // 1、全部分类
  menu() {
    return service.get(`/menu`)
  },
  // 2、获取所有省份
  province() {
    return service.get(`/province`)
  },
  // 获取省份所有城市
  city(id) {
    return service.get(`/citys/${id}`)
  },
  // 热门城市
  hotCity() {
    return service.get(`/hotCity`)
  },
  // 3、获取定位
  position() {
    return service.get(`/position`)
  },
  // 4、获取城市具体信息
  crumbs(city) {
    return service.get(`/crumbs?city=${city}`)
  },
  // 5、根据关键词搜索
  results(city, keyword) {
    return service.get(`/results?city=${city}&keyword=${keyword}`)
  },
  // 注册
  register(username,password,email) {
    return service.post(`/users/register`, {
      username: username,
      password: password,
      email: email
    })
  },
  // 登录
  login(username,password) {
    return service.post(`/users/login`, {
      username: username,
      password: password
    })
  },
  // 商铺详情
  products(keyword,city){
    return service.get(`/products?keyword=${keyword}&city=${city}`)
  },
  // 获取城市具体信息
  crumbs(city){
    return service.get(`/crumbs?city=${city}`)
  },
  // 获取热搜
  hotPlace(city){
    return service.get(`/hotPlace?city=${city}`)
  }
}