import React from 'react';
import { Button } from 'antd'
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
          <div id="playerProgress">
            <div class="time currentTime">00000</div>
            <div class="progressbar" id="progressbar">
                <span class="bar"></span>
            </div>
            <div class="time totalTime">00000</div>
          </div>
        </div>
        <div className="player-info">3</div>
      </div>
    )
  }
}

export default Player;