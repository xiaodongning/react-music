import React from 'react';
import styles from './index.module.less';
import IconFont from '../IconFont';

class Playlist extends React.Component { 
  render() { 
    return (
      <div className={`${styles.playlist} ${this.props.className}`}>
        {
          this.props.cover &&
          <div className={styles.playlistCardMedia}>
            <div className={styles.copywriter}>
              {this.props.description}
            </div>
            <IconFont className={styles.playlistIcon} type="icon-bofang" />
            <img src={this.props.cover} alt="" />
          </div>
        }
        
        {this.props.children}
      </div>
    )
  }
}
export const Meta = (props) => { 
  return (
    <React.Fragment>
      <div className="playlist-card-body">
        <p className="f-thide">{props.title}</p>
      </div>
    </React.Fragment>
  )
}
export default Playlist;