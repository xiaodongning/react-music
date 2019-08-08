// 个性推荐页面接口
import request from '../utils/request';

export function fetchBanner() { 
  return request({
    url: '/banner',
    method: 'get'
  })
}