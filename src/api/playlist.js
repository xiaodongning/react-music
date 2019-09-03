import request from "../utils/request";


export function getPlaylist() { 
  return request({
    method: 'get',
    url:'/personalized'
  })
}

export function getNewSong() { 
  return request({
    method: 'get',
    url:'/personalized/newsong'
  })
}

export function getMusicUrl(params) { 
  return request({
    method: 'get',
    url: '/music/url',
    params
  })
}