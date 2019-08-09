import React from "react";
import classNames from 'classnames';
class ProgressBar extends React.Component {
  render() {
    const className = classNames(
      'progress-bar',
      this.props.className
    );
    const color = this.props.innerColor;
    return (
      <div className={className}>
        <div className="bar-inner" style={{backgroundColor:color}}>
          <div className="progress" ref="progress" />
          <div className="progress-btn-wrapper" ref="progressBtn">
            <div className="progress-btn" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
