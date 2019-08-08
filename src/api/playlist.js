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