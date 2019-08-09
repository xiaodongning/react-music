/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 13:00:33
 * @LastEditTime: 2019-08-09 14:53:07
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Button } from 'antd'
import ProgressBar from './ProgressBar';
import IconFont from '../IconFont';
class Player extends React.Component { 

  render() { 
    return (
      <div className="player">
        <div className="player-control">
          <Button type="primary"  shape="circle" icon="step-backward" />
          <Button type="primary" style={{marginLeft:16,marginRight:16}} size="large" shape="circle" icon="caret-right" />
          <Button type="primary"  shape="circle" icon="step-forward" />
        </div>
        <div className="player-progress">
          <div className="progress-wrapper">
            <span className="time time-l">0000</span>
            <div className="progress-bar-wrapper">
              <ProgressBar/>
            </div>
            <span className="time time-r">0000</span>
          </div>
        </div>
        <div className="player-info">
          <div className="player-sound">
            <IconFont className="sound-icon" type="icon-icon-7" />
            <ProgressBar innerColor="transparent" className="sound-progress" />
          </div>
          <div className="player-switch">
            <IconFont className="sound-icon" type="icon-icon-5" />
          </div>
          <div className="player-switch">
            <IconFont className="sound-icon" type="icon-icon-8" />
          </div>
        </div>
      </div>
    )
  }
}

export default Player;