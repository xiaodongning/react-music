/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 14:53:35
 * @LastEditTime: 2019-08-09 15:11:46
 * @LastEditors: Please set LastEditors
 */

export function pad(val) { 
  if (val.toString().length < 2) {
    return '0' + val;
  } else { 
    return val;
  }
}