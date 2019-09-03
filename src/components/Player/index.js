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
import { connect } from 'react-redux';
import { toggle, prevSong } from '../../store/actionCreator';
import { format } from '../../utils'
class Player extends React.Component { 
  constructor(props) {
    super(props)
    this.audio = null
    this.state = {
      currentTime: 0,
      duration: 0,
      audio: React.createRef(),
      volume: 1,
      sound: true,
      currentIdx:props.currentIdx
    }
  }
  componentDidMount(props,state) { 
    const audio = this.state.audio.current;
    this.audio = audio
    audio.onloadeddata = ()=> { 
      this.setState({
        duration: audio.duration
      })
    }
  }
  static getDerivedStateFromProps(props, state) { 
    // if (props.currentUrl !== '') {
    //   const audio = state.audio.current;
    //   let duration = 0
    //   const stop = setInterval(() => {
    //   duration = audio.duration
    //     if (duration) {
    //       clearInterval(stop)
    //     }
    //   }, 150)
    //   return {
    //     ...state,
    //     duration: 123
    //   }
    // } else { 
    //   return null
    // }

    return null
  }
  componentDidUpdate(props, state) { 
    const audio = state.audio.current;
    this.props.playing ? audio.play() : audio.pause() 
  }
  timeupdate = (e)=> { 
    this.setState({
      currentTime: e.target.currentTime
    })
  }
  percent() { 
    return this.state.currentTime/this.state.duration
  }
  soundChange = () => { 
    this.setState({
      sound:!this.state.sound
    }, () => { 
        if (this.state.sound) {
          this.setState({
            volume:0.5
          })
          this.audio.volume = 0.5
        } else { 
          this.setState({
            volume:0
          })
          this.audio.volume = 0
        }
    })
  }
  volumeChange = (percent) => { 
    if(percent>1)percent=1
    this.setState({
      volume:percent
    })
    this.audio.volume = percent
  }
  percentChange = (percent)=> { 
    const currentTime = this.state.duration * percent
    this.setState({
      currentTime
    })
    this.audio.currentTime = currentTime
    this.audio.play()
  }
  render() {
    return (
      <div className="player">
        <audio ref={this.state.audio} onTimeUpdate={this.timeupdate} autoPlay preload="preload" src={this.props.currentUrl} />
        <div className="player-control">
          <Button type="primary" onClick={this.props.prevSong} shape="circle" icon="step-backward" />
          <Button type="primary"
            onClick={this.props.playerControl}
            style={{ marginLeft: 16, marginRight: 16 }}
            size="large"
            shape="circle"
            icon={this.props.playing ? 'pause':'caret-right'} />
          <Button type="primary" onClick={this.props.nextSong} shape="circle" icon="step-forward" />
        </div>
        <div className="player-progress">
          <div className="progress-wrapper">
            <span className="time time-l">{format(this.state.currentTime)}</span>
            <div className="progress-bar-wrapper">
              <ProgressBar percent={this.percent()} onPercent={this.percentChange} />
            </div>
            <span className="time time-r">{format(this.state.duration)}</span>
          </div>
        </div>
        <div className="player-info">
          <div className="player-sound">
            <IconFont onClick={this.soundChange} className="sound-icon" type={this.state.sound?'icon-icon-7' : 'icon-jingyin'} />
            <ProgressBar innerColor="transparent" percent={this.state.volume} onPercent={this.volumeChange} className="sound-progress" />
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
const mapStateToProps = (state) => { 
  return {
    playing: state.player.get('playing'),
    currentUrl: state.player.get('currentUrl'),
    currentIdx: state.player.get('currentIdx'),
    playlist: state.player.get('playing')
  }
}
const mapDispatchToProps = (dispatch, props) => { 

  return {
    playerControl() { 
      dispatch(toggle())
    },
    prevSong() { 
      dispatch(prevSong())

    },
    nextSong() { 

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);