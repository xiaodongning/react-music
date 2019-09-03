import React from "react";
import classNames from 'classnames';
class ProgressBar extends React.Component {
  constructor(props) { 
    super(props)
    this.progressBar = React.createRef()
    this.progress = React.createRef()
    this.progressBtn = React.createRef()
    // this.state = {
    //   progressBar: React.createRef,
    //   progress: React.createRef
    // }
  }
  componentDidMount() { 
    const barWidth = this.progressBar.current.clientWidth
    const offsetWidth = barWidth * this.props.percent
    this._offset(offsetWidth)
  }
  _offset(width) {
    this.progress.current.style.width = `${width}px`
    this.progressBtn.current.style['transform'] = `translate3d(${width}px,0,0)`
  }
  componentDidUpdate(props, state) { 
    // const progress = this.progress.current;
    const barWidth = this.progressBar.current.clientWidth - 16
    const offsetWidth = barWidth * props.percent
    this._offset(offsetWidth)
  }
  _triggerPercent() {
    const barWidth = this.progressBar.current.clientWidth - 16
    const percent = this.progress.current.clientWidth / barWidth
    this.props.onPercent(percent)
  }
  progressClick = (e) => { 
    const rect = this.progressBar.current.getBoundingClientRect()
    const offsetWidth = e.pageX - rect.left
      this._offset(offsetWidth)
      this._triggerPercent()
  }
  render() {
    const className = classNames(
      'progress-bar',
      this.props.className
    );
    const color = this.props.innerColor;
    return (
      <div className={className} ref={this.progressBar} onClick={this.progressClick}>
        <div className="bar-inner" style={{backgroundColor:color}}>
          <div className="progress" ref={this.progress} />
          <div className="progress-btn-wrapper" ref={this.progressBtn}>
            <div className="progress-btn" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
